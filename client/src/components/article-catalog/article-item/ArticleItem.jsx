import { Link } from 'react-router-dom';
import { truncateText } from '../../../utils/textTrucation';
import styles from './ArticleItem.module.css';

export default function ArticleItem({ _id, title, imageUrl, content }) {
  return (
    <div className={styles.article}>
      <h2 className={styles.title}>{truncateText(title, 20)}</h2>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>
      <p className={styles.content}>{truncateText(content, 100)}</p>

      <Link to={`/articles/${_id}`} className={styles.detailsButton}>
        Read More
      </Link>
    </div>
  );
}
