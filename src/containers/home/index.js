// Custom Components
import Footer from "../../components/Footer";
import HeroSection from "../../components/home/heroSection";
import HiringBox from "../../components/home/hiringBox";
import TopHeader from "../../components/topHeader";

// styles
import "./styles.scss";

function Home() {
  return (
    <div className="home-page-container">
      <TopHeader />
      <HeroSection />

      <HiringBox />
      <Footer />
    </div>
  );
}

export default Home;
