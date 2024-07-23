import * as articleService from '../../services/articleService';
import styles from './ArticleCreate.module.css';

export default function ArticleCreate() {
  return (
    <div className={styles.articleCreate}>
      <h1 className={styles.title}>Create Article</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            // value={formData.title}
            // onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className={styles.textarea}
            // value={formData.content}
            // onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="imageUrl" className={styles.label}>
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className={styles.input}
            // value={formData.imageUrl}
            // onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Create
        </button>
      </form>
    </div>
  );
}
