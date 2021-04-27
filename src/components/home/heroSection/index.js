import Lottie from "react-lottie";
import animationData from "../../../assets/json/heroAnimation";

import downArrow from "../../../assets/images/down-arrow.svg";

import "./styles.scss";

function HeroSection() {
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

            <button className="arrow-icon-btn">
              <span> How it works</span>
              <img alt="" src={downArrow} />
            </button>
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
