import { useNavigate, useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';

import * as articleService from '../../services/articleService';
import AuthContext from '../../contexts/authContext';

import styles from './ArticleEdit.module.css';

export default function ArticleEdit() {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const { articleId } = useParams();
  const [editFormData, setEditFormData] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((article) => {
        if (article._ownerId === userId) {
          setEditFormData(article);
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

  const handleChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  const editArticleSubmitHandler = async (e) => {
    e.preventDefault();

    if (!isOwner) {
      alert('You are not authorized to edit this article.');
      return;
    }

    try {
      await articleService.edit(articleId, editFormData);
      navigate(`/articles/${articleId}`);
    } catch (error) {
      console.error(error);
      // todo: add '401 page'
      navigate('/401');
    }
  };

  if (editFormData === null) {
    return <p>Loading...</p>;
  }

  if (!isOwner) {
    <p className={styles.unauthorized}>
      You are not authorized to edit this article.
    </p>;
  }

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
