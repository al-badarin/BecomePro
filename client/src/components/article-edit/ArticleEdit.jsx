import { useNavigate, useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import * as articleService from '../../services/articleService';
import AuthContext from '../../contexts/authContext';

import styles from './ArticleEdit.module.css';

export default function ArticleEdit() {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const { articleId } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((article) => {
        if (article._ownerId === userId) {
          setInitialValues(article);
          setIsOwner(true);
        } else {
          setIsOwner(false);
          alert('You are not authorized to edit this article.');
          navigate('/articles');
        }
      })
      .catch((err) => {
        console.error(err);
        // todo:
        // navigate('/not-found');
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
        alert('You are not authorized to edit this article.');
        return;
      }

      try {
        await articleService.edit(articleId, values);
        navigate(`/articles/${articleId}`);
      } catch (error) {
        console.error('Failed to update article', error);
        navigate('/401');
      } finally {
        setSubmitting(false);
      }
    },
  });

  // todo: add styling for the spinner
  if (!initialValues) {
    return <p>Loading...</p>;
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
