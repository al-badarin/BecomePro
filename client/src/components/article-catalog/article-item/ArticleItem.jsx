import { Link } from 'react-router-dom';
import styles from './ArticleItem.module.css';

export default function ArticleItem({ _id, title, imageUrl, content }) {
  return (
    <div className={styles.article}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <Link to={`/articles/${_id}`} className={styles.detailsButton}>
          Read More
        </Link>
      </div>
    </div>
  );
}
