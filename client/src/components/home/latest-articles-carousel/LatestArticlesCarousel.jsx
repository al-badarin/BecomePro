import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import * as articleService from '../../../services/articleService';
import styles from './LatestArticlesCarousel.module.css';

export default function LatestArticlesCarousel() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleService.getLatest().then(setArticles).catch(console.error);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Latest Articles</h2>
      <Carousel
        key={articles.map((a) => a._id).join()}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {articles.map((article) => (
          <div key={article._id} className={styles.slide}>
            <Link  to={`/articles/${article._id}`}>
              <div className={styles.imageContainer}>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.overlay}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.content}>{article.content}</p>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
