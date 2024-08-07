import { useEffect, useState } from 'react';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import ArticleItem from './article-item/ArticleItem'; 

import * as articleService from '../../services/articleService';

import styles from './ArticleCatalog.module.css';

export default function ArticleCatalog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    articleService
      .getAll()
      .then((result) => {
        setArticles(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  // TODO: style error handling messages / separate component? / use Formik
  if (error) {
    return <p>Error loading articles</p>;
  }

  return (
    <div className={styles.articleCatalog}>
      <h1 className={styles.title}>Articles</h1>
      <div className={styles.articles}>
        {articles.map((article) => (
          <ArticleItem key={article._id} {...article} />
        ))}

        {articles.length === 0 && (
          <h3 className={styles.noArticles}>No articles yet</h3>
        )}
      </div>
    </div>
  );
}
