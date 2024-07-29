import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from './Trainers.module.css';

export default function Trainers() {
  return (
    <section
      className={`trainer_section layout_padding ${styles.trainerSection}`}
    >
      <div className="container">
        <div className={styles.headingContainer}>
          <h2>Our Coaches</h2>
        </div>
        <div className="row">
          {/* JAMAL */}
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className={styles.box}>
              <div className={styles.name}>
                <h5>Jamal Al Badarin</h5>
              </div>
              <div className={styles.imgBox}>
                <img
                  src="images/jim-point-up.jpg"
                  alt="Trainer Photo - Jamal Al Badarin"
                />
              </div>
              <div className={styles.socialBox}>
                <Link
                  to="https://www.facebook.com/jamal.al.badarin"
                  target="_blank"
                >
                  <FaFacebook
                    className={`${styles.icon} ${styles.facebookIcon}`}
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/al.badarin22/"
                  target="_blank"
                >
                  <FaInstagram
                    className={`${styles.icon} ${styles.instagramIcon}`}
                  />
                </Link>
                <Link to="mailto:jamalalbadarin@gmail.com" target="_blank">
                  <FaEnvelope
                    className={`${styles.icon} ${styles.emailIcon}`}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* DIMITAR */}
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className={styles.box}>
              <div className={styles.name}>
                <h5>Dimitar Ivanov</h5>
              </div>
              <div className={styles.imgBox}>
                <img
                  src="images/mitko_cska.jpg"
                  alt="Trainer Photo - Dimitar Ivanov"
                />
              </div>
              <div className={styles.socialBox}>
                <Link
                  to="https://www.facebook.com/profile.php?id=100004162417664"
                  target="_blank"
                >
                  <FaFacebook
                    className={`${styles.icon} ${styles.facebookIcon}`}
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/dimitariivanovv/"
                  target="_blank"
                >
                  <FaInstagram
                    className={`${styles.icon} ${styles.instagramIcon}`}
                  />
                </Link>
                <Link to="mailto:dimitarivanov2525@gmail.com" target="_blank">
                  <FaEnvelope
                    className={`${styles.icon} ${styles.emailIcon}`}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* YORDAN */}
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className={styles.box}>
              <div className={styles.name}>
                <h5>Yordan Zhelev</h5>
              </div>
              <div className={styles.imgBox}>
                <img
                  src="images/dancho-official-rozi-2.jpg"
                  alt="Trainer Photo - Yordan Zhelev"
                />
              </div>
              <div className={styles.socialBox}>
                <Link
                  to="https://www.facebook.com/profile.php?id=100075146420254"
                  target="_blank"
                >
                  <FaFacebook
                    className={`${styles.icon} ${styles.facebookIcon}`}
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/yordanzhelev9/"
                  target="_blank"
                >
                  <FaInstagram
                    className={`${styles.icon} ${styles.instagramIcon}`}
                  />
                </Link>
                <Link to="mailto:zhelevyordan9@gmail.com" target="_blank">
                  <FaEnvelope
                    className={`${styles.icon} ${styles.emailIcon}`}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
