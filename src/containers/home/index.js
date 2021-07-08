// Custom Components
import { useEffect, useRef } from "react";
import FooterPrimary from "../../components/footerPrimary";
import EnterUnberry from "../../components/home/enterUnberry";
import HeroSection from "../../components/home/heroSection";
import HiringBox from "../../components/home/hiringBox";
// import HoldupSection from "../../components/home/holdupSection";
import InsightsSection from "../../components/home/insightsSection";
import RapidlyEvolving from "../../components/home/rapidlyEvolving";
import TalentWorkforce from "../../components/home/talentWorkforce";
import UnberryWorks from "../../components/home/unberryWorks";
import TopHeader from "../../components/topHeader";

// styles
import "./styles.scss";

function Home() {

  return (
    <div className="home-page-container">
      <TopHeader />

      <HeroSection />

      <RapidlyEvolving />

      {/* <HoldupSection /> */}

      <EnterUnberry />

      <UnberryWorks />

      <TalentWorkforce />

      {/* <InsightsSection /> */}

      <HiringBox />

      <FooterPrimary />
    </div>
  );
}

export default Home;
