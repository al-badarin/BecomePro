import Info from './info/Info';

import styles from './Footer.module.css';

export default function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <>
      <Info />
      <footer className={`container-fluid ${styles.footer_section}`}>
        <p>All Rights Reserved. &copy; BecomePro {currYear}</p>
      </footer>
    </>
  );
}
