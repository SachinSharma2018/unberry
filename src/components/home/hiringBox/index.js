import InputPrimary from "../../inputPrimary";

import "./styles.scss";

function HiringBox() {
  return (
    <section className="hiring-section">
      <div className="content-box">
        <h1 className="title2">Take the Guesswork out...</h1>
        <p className="description o-7 mt--15">
          Transform the way you hire - by taking out inefficiencies and biases.
          By switching to a smarter, unbiased, tech-driven and experiential way
          of hiring.
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
