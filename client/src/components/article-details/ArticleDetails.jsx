import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as articleService from '../../services/articleService';

import styles from './ArticleDetails.module.css';

export default function ArticleDetails() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((result) => setArticle(result))
      .catch((err) => {
        console.error('Failed to fetch article details', err);
      });
  }, [articleId]);

//   const deleteButtonClickHandler

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

      <div className={styles.buttons}>
        <Link to={`/articles/${articleId}/edit`} className={styles.button}>
          Edit
        </Link>
        {/* onClick={deleteButtonClickHandler} */}
        <button className={styles.button}>Delete</button>
      </div>
    </div>
  );
}
