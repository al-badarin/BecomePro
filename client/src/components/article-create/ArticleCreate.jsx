import { useNavigate } from 'react-router';
import * as articleService from '../../services/articleService';
import styles from './ArticleCreate.module.css';
import { useState } from 'react';

export default function ArticleCreate() {
  const navigate = useNavigate();
  const [createFormData, setCreateFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setCreateFormData({
      ...createFormData,
      [e.target.name]: e.target.value,
    });
  };

  const createArticleSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await articleService.create(createFormData);

      navigate('/articles');
    } catch (error) {
      console.error('Failed to create article', error);
    }
  };

  return (
    <div className={styles.articleCreate}>
      <h1 className={styles.title}>Create Article</h1>
      <form className={styles.form} onSubmit={createArticleSubmitHandler}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            value={createFormData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className={styles.textarea}
            value={createFormData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="imageUrl" className={styles.label}>
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className={styles.input}
            value={createFormData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Create
        </button>
      </form>
    </div>
  );
}
