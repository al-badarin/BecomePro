import { Link } from 'react-router-dom';
import styles from './NotAuthorized.module.css';

const NotAuthorized = () => {
  return (
    <div className={styles.notAuthorized}>
      <h1>401 - Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default NotAuthorized;
