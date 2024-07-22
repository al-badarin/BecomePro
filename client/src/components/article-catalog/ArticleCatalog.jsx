import { useEffect, useState } from 'react';
import * as articleService from '../../services/articleService';
import ArticleItem from './article-item/ArticleItem';

export default function ArticleCatalog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleService.getAll().then((result) => setArticles(result));
  }, []);

  return (
    <div className="article-catalog">
      <h1>Articles</h1>
      {articles.map((article) => (
        <ArticleItem key={article._id} {...article} />
      ))}

      {articles.length === 0 && (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </div>
  );
}
