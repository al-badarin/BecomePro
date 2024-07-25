import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as articleService from '../../services/articleService';
import AuthContext from '../../contexts/authContext';

import styles from './ArticleDetails.module.css';

export default function ArticleDetails() {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((result) => {
        setArticle(result);
        setIsOwner(result._ownerId === userId);
      })
      .catch((err) => {
        console.error('Failed to fetch article details', err);
      });
  }, [articleId, userId, navigate]);

  const deleteButtonClickHandler = async () => {
    if (!isOwner) {
      alert('You are not authorized to delete this article.');
      return;
    }

    const hasConfirmed = confirm(
      `Are you sure you want to delete the article: '${article.title}'`
    );

    if (hasConfirmed) {
      try {
        await articleService.remove(articleId);
        navigate('/articles');
      } catch (error) {
        console.error('Failed to delete article', error);
      }
    }
  };

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.articleDetails}>
      <h1 className={styles.title}>{article.title}</h1>
      <img
        className={styles.image}
        src={article.imageUrl}
        alt={article.title}
      />
      <p className={styles.content}>{article.content}</p>

      {userId === article._ownerId && (
        <div className={styles.buttons}>
          <Link to={`/articles/${articleId}/edit`} className={styles.button}>
            Edit
          </Link>

          <button className={styles.button} onClick={deleteButtonClickHandler}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
