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
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

      if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (video) {
            if (video.isIntersecting) {
              for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                  videoSource.src = videoSource.dataset.src;
                }
              }

              video.target.load();
              video.target.classList.remove("lazy");
              lazyVideoObserver.unobserve(video.target);
            }
          });
        });

        lazyVideos.forEach(function (lazyVideo) {
          lazyVideoObserver.observe(lazyVideo);
        });
      }
    });
  }, [])

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
