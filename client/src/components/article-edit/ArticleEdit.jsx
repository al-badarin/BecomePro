import * as articleService from '../../services/articleService';
import styles from './ArticleEdit.module.css';

export default function ArticleEdit() {
  return (
    <div className={styles.articleEdit}>
      <h1 className={styles.title}>Edit Article</h1>
      {/* onSubmit={editArticleSubmitHandler} */}
      <form className={styles.form} >
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            // value={editFormData.title}
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
            // value={editFormData.content}
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
            // value={editFormData.imageUrl}
            // onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Update
        </button>
      </form>
    </div>
  );
}
