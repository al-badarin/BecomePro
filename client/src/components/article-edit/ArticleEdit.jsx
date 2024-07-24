import { useNavigate, useParams } from 'react-router';
import * as articleService from '../../services/articleService';
import styles from './ArticleEdit.module.css';
import { useEffect, useState } from 'react';

export default function ArticleEdit() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [editFormData, setEditFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((article) => {
        setEditFormData(article);
      })
      .catch((err) => {
        console.error(err);
        // todo:
        // navigate('/not-found');
      });
  }, [articleId, navigate]);

  const handleChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  const editArticleSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await articleService.edit(articleId, editFormData);
      navigate(`/articles/${articleId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.articleEdit}>
      <h1 className={styles.title}>Edit Article</h1>
      <form className={styles.form} onSubmit={editArticleSubmitHandler}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            value={editFormData.title}
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
            value={editFormData.content}
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
            value={editFormData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </div>
  );
}
