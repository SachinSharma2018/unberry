import downArrow from "../../../assets/images/down-arrow.svg";
import heroImage from "../../../assets/images/hero-image.png";

import "./styles.scss";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-5">
            <h1 className="title1">Using games to amplify your hiring</h1>
            <p className="description o-7 mt--15">
              Combining game technology and neuroscience to surface precise
              signals and disrupt the way companies recruit, retain and develop
              talent.
            </p>

            <button className="arrow-icon-btn">
              <span> How it works</span>
              <img alt="" src={downArrow} />
            </button>
          </div>
        </div>
      </div>
      <img alt="" src={heroImage} className="hero-image" />
    </section>
  );
}

export default HeroSection;
