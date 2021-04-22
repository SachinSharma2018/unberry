import shape1 from "../../../assets/images/shapes/p1.svg";
import shape2 from "../../../assets/images/shapes/p2.svg";
import shape3 from "../../../assets/images/shapes/p3.svg";
import shape4 from "../../../assets/images/shapes/p4.svg";
import shape0 from "../../../assets/images/shapes/w1.svg";

import "./styles.scss";

function TalentWorkforce() {
  return (
    <section className="talent-workforce-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h4 className="title2">
              Find <span className="theme-purple">The Perfect Talent </span> For
              Your Workforce
            </h4>

            <img alt="" src={shape0} className="img1"/>
          </div>

          <div className="col-sm-8">
            <div className="gird-section">
            <div className="card-box">
              <img alt="" src={shape1} />
              <div className="info">
                <h4 className="title4">A Much More Precise Signal</h4>
                <p className="description">
                  Improve the efficiency in Hiring. Reduce time to hire by{" "}
                  <span className="theme-purple">45%</span> and cost to hire by{" "}
                  <span className="theme-purple">88%</span>
                </p>
              </div>
            </div>

            <div className="card-box">
              <img alt="" src={shape2} />
              <div className="info">
                <h4 className="title4">Fair and Unbiased Process</h4>
                <p className="description">
                  Widen your sourcing pool with a fair and unbiased way of
                  hiring. Increase diversity by{" "}
                  <span className="theme-purple">56%</span>
                </p>
              </div>
            </div>

            <div className="card-box">
              <img alt="" src={shape3} />
              <div className="info">
                <h4 className="title4">Access to Hidden Talent Pools</h4>
                <p className="description">
                  <span className="theme-purple"> 46%</span> of people hired are
                  bad hires. Candidate Retention Increases by{" "}
                  <span className="theme-purple">77%</span>
                </p>
              </div>
            </div>

            <div className="card-box">
              <img alt="" src={shape4} />
              <div className="info">
                <h4 className="title4">Long Lasting Brand Impact</h4>
                <p className="description">
                  Candidates find game based assessments to be better experience
                  by <span className="theme-purple">95%.</span>
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalentWorkforce;
