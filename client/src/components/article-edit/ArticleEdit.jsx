import { useNavigate, useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as articleService from '../../services/articleService';
import AuthContext from '../../contexts/authContext';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

import styles from './ArticleEdit.module.css';

export default function ArticleEdit() {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const { articleId } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((article) => {
        if (article._ownerId === userId) {
          setInitialValues(article);
          setIsOwner(true);
        } else {
          setIsOwner(false);
          toast.error('You are not authorized to edit this article.');
          navigate('/401');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to fetch article details.');
        navigate('/404');
      });
  }, [articleId, userId, navigate]);

  const formik = useFormik({
    initialValues: initialValues || {
      title: '',
      content: '',
      imageUrl: '',
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, 'Title must be between 5 and 50 characters')
        .max(50, 'Title must be between 5 and 50 characters')
        .required('Title is required'),
      content: Yup.string()
        .min(10, 'Content must be at least 10 characters long')
        .required('Content is required'),
      imageUrl: Yup.string()
        .url('Invalid URL format')
        .required('Image URL is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      if (!isOwner) {
        toast.error('You are not authorized to edit this article.');
        return;
      }

      try {
        await articleService.edit(articleId, values);
        toast.success('Article updated successfully!');
        navigate(`/articles/${articleId}`);
      } catch (error) {
        console.error('Failed to update article', error);
        toast.error('Failed to update article.');
        navigate('/401');
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!isOwner) {
    return (
      <p className={styles.unauthorized}>
        You are not authorized to edit this article.
      </p>
    );
  }

  return (
    <div className={styles.articleEdit}>
      <h1 className={styles.title}>Edit Article</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        {/* TITLE */}
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className={styles.error}>{formik.errors.title}</div>
          ) : null}
        </div>

        {/* CONTENT */}
        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className={styles.textarea}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
          />
          {formik.touched.content && formik.errors.content ? (
            <div className={styles.error}>{formik.errors.content}</div>
          ) : null}
        </div>

        {/* IMAGE */}
        <div className={styles.formGroup}>
          <label htmlFor="imageUrl" className={styles.label}>
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageUrl}
          />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <div className={styles.error}>{formik.errors.imageUrl}</div>
          ) : null}
        </div>

        {/* ACTION BTN */}
        <button
          type="submit"
          className={styles.button}
          disabled={formik.isSubmitting}
        >
          Update
        </button>
      </form>
    </div>
  );
}
