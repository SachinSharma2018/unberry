import { Link } from "react-scroll";
import Lottie from "react-lottie";
import animationData from "../../../assets/json/heroAnimation";
import downArrow from "../../../assets/images/down-arrow.svg";

import "./styles.scss";

function HeroSection(props) {
  const media = window.matchMedia(`(min-width: 768px)`);
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-5 col-12">
            <h1 className="title1">
              Bury Biases. <br />
              Unbury Potential.
            </h1>
            <p className="description o-7 mt--15">
              Combining game technology, data science and neuroscience to
              surface precise signals and disrupt the way companies recruit,
              retain and develop talent.
            </p>

            <Link
              activeClass="active"
              className="arrow-icon-btn"
              spy={true}
              offset={media.matches === true ? 230 : 150}
              isDynamic={true}
              to="hiringLandscape"
            >
              <span> How it works</span>
              <img alt="" src={downArrow} />
            </Link>
          </div>
        </div>
      </div>
      <div className="heroLottie">
        <Lottie
          options={{
            animationData: animationData,
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
    </section>
  );
}

export default HeroSection;
