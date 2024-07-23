import { Link } from 'react-router-dom';
import styles from './ArticleItem.module.css';

export default function ArticleItem({ _id, title, imageUrl, content }) {
  return (
    <div className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.image} src={imageUrl} alt={title} />
      <p className={styles.content}>{content}</p>

      <Link to={`/articles/${_id}`} className={styles.detailsButton}>
        Read More
      </Link>
    </div>
  );
}
