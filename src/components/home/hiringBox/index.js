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

      <div className="shape1" />
      <div className="shape2" />
    </section>
  );
}

export default HiringBox;
