import styles from './ArticleItem.module.css';

export default function ArticleItem({ title, img, content }) {
  return (
    <div className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.image} src={img} alt={title} />
      <p className={styles.content}>{content}</p>
    </div>
  );
}
