import Info from './info/Info';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <Info />
      <footer className={`container-fluid ${styles.footer_section}`}>
        <p>All Rights Reserved. &copy; BecomePro 2024</p>
      </footer>
    </>
  );
}
