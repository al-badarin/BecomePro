import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import LoadingSpinner from '../loading-spinner/LoadingSpinner';

import * as articleService from '../../services/articleService';

import styles from './ArticleCreate.module.css';

export default function ArticleCreate() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      imageUrl: '',
    },

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
      setLoading(true);

      try {
        await articleService.create(values);
        navigate('/articles');
      } catch (error) {
        console.error('Failed to create article', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.articleCreate}>
      <h1 className={styles.title}>Create Article</h1>
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
          Create
        </button>
      </form>
    </div>
  );
}
