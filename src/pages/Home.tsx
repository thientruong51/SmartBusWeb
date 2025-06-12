import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import DownloadBanner from "../components/DownloadBanner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Statistics />
      <Testimonials />
      <Gallery />
      <DownloadBanner />
    </>
  );
};

export default Home;