import HeroSlider from './hero-slider/HeroSlider';
import AboutUs from '../about-us/AboutUs';
import Trainers from '../trainers/Trainers';
import LatestArticlesCarousel from './latest-articles-carousel/LatestArticlesCarousel';

import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <div className="hero_area">
        <HeroSlider />
      </div>

      <div className={styles.about}>
        <AboutUs />
      </div>

      <Trainers />

      <LatestArticlesCarousel />
    </>
  );
}
