import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from './Info.module.css';

export default function Info() {
  return (
    <section className={`info_section ${styles.layout_padding2}`}>
      <div className="container">
        <div className="info_items">
          <div className="item">
            <div className={`${styles.imgBox} ${styles.box1}`}>
              <FaMapMarkerAlt className={styles.icon} />
            </div>
            <div className="detail-box">
              <p>Bulgaria</p>
            </div>
          </div>

          <div className="item">
            <div className={`${styles.imgBox} ${styles.box2}`}>
              <FaPhoneAlt className={styles.icon} />
            </div>
            <div className="detail-box">
              <p>+359 888881476</p>
            </div>
          </div>

          <div className="item">
            <div className={`${styles.imgBox} ${styles.box3}`}>
              <FaEnvelope className={styles.icon} />
            </div>
            <div className="detail-box">
              <p>become.pro2024@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
