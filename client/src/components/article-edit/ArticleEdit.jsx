import { useNavigate, useParams } from 'react-router';
import * as articleService from '../../services/articleService';
import styles from './ArticleEdit.module.css';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/authContext';

export default function ArticleEdit() {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const { articleId } = useParams();
  const [editFormData, setEditFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((article) => {
        setEditFormData(article);
        setIsOwner(article._ownerId === userId);
      })
      .catch((err) => {
        console.error(err);
        // todo:
        // navigate('/not-found');
      });
  }, [articleId, navigate, userId]);

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
    }
  };

  //   TODO: style the <p>
  if (!isOwner) {
    return <p>You are not authorized to edit this article.</p>;
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
