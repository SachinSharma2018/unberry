import test3 from "../../../assets/images/test3.png";

import "./styles.scss";

function HoldupSection() {
  return (
    <section className="holdup-section-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h4 className="title2">Hold up one second..</h4>
          </div>
        </div>
      </div>
      <div className="scroll-section">
        <img src={test3} />
      </div>
    </section>
  );
}

export default HoldupSection;
