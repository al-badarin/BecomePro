import { useEffect, useState } from 'react';

import styles from './ArticleCatalog.module.css';

import * as articleService from '../../services/articleService';
import ArticleItem from './article-item/ArticleItem';

export default function ArticleCatalog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleService.getAll().then((result) => setArticles(result));
  }, []);

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
