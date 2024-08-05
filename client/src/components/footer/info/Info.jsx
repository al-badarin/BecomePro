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
              <p className={styles.contactLink}>Bulgaria</p>
            </div>
          </div>

          <div className="item">
            <div className={`${styles.imgBox} ${styles.box2}`}>
              <FaPhoneAlt className={styles.icon} />
            </div>
            <div className="detail-box">
              <p>
                <a href="tel:+359888881476" className={styles.contactLink}>
                  +359 888881476
                </a>
              </p>
            </div>
          </div>

          <div className="item">
            <div className={`${styles.imgBox} ${styles.box3}`}>
              <FaEnvelope className={styles.icon} />
            </div>
            <div className="detail-box">
              <p>
                <a
                  href="mailto:become.pro2024@gmail.com"
                  className={styles.contactLink}
                >
                  become.pro2024@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
