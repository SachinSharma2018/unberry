import test3 from "../../../assets/images/test3.png";
import shape1 from "../../../assets/images/shapes/g1.svg";

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

      <div className="content-section">
        <div className="science-box">
          Science-backed games can present multi-dimensional stimuli to reveal a
          lot about players cognition and behaviour.
        </div>

        <img src={shape1} className="img-style"/>
      </div>
    </section>
  );
}

export default HoldupSection;
