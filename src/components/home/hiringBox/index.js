import downArrow from "../../../assets/images/down-arrow.svg";
import heroImage from "../../../assets/images/hero-image.svg";
import InputPrimary from "../../inputPrimary";

import "./styles.scss";

function HiringBox() {
  return (
    <section className="hiring-section">
      <div className="content-box">
        <h1 className="title2">Take the guesswork out of your hiring</h1>
        <p className="description o-7 mt--15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="newsletter-section">
          <InputPrimary placeholder="hereisme@myofficalmail.com" />
          <button className="started-btn">Get started</button>
        </div>
      </div>
    </section>
  );
}

export default HiringBox;
