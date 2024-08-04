import AboutUs from './about-us/AboutUs';
import HeroSlider from './hero-slider/HeroSlider';
import LatestArticlesCarousel from './latest-articles-carousel/LatestArticlesCarousel';

export default function Home() {
  return (
    <>
      <div className="hero_area">
        <HeroSlider />
      </div>
      <LatestArticlesCarousel />
      <AboutUs />
    </>
  );
}
