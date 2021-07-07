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
          <div className="col-sm-5">
            <h4 className="title2">
              Find <span className="theme-purple">The <br/> Perfect Talent </span> <br/> And
              Transform <br className="d-none d-sm-block"/> your Hiring.
            </h4>
            {/* <img alt="" src={shape0} className="img1" /> */}
          </div>

          <div className="col-sm-7">
            <div className="gird-section">
              <div className="card-box">
                <img alt="" src={shape1} />
                <div className="info">
                  <h4 className="title4">
                    A Much More <br /> Precise Signal
                  </h4>
                  <p className="description">
                    Improve the efficiency in Hiring. Reduce time to hire by{" "}
                    <span className="theme-purple">50-60%</span> nd cost upwards
                    of <span className="theme-purple">25%</span>
                  </p>
                </div>
              </div>

              <div className="card-box">
                <img alt="" src={shape2} />
                <div className="info">
                  <h4 className="title4">
                    Fair and Unbiased <br /> Process
                  </h4>
                  <p className="description">
                    Increase diversity representation in final rounds by{" "}
                    <span className="theme-purple">60-100%.</span> Increase
                    overall retention by{" "}
                    <span className="theme-purple">50%</span>
                  </p>
                </div>
              </div>

              <div className="card-box">
                <img alt="" src={shape3} />
                <div className="info">
                  <h4 className="title4">
                    Access to Hidden <br /> Talent Pools
                  </h4>
                  <p className="description">
                    Widen sourcing pool with fair and unbiased way of hiring.{" "}
                    <span className="theme-purple">2x</span> increase in
                    candidate yield.
                  </p>
                </div>
              </div>

              <div className="card-box">
                <img alt="" src={shape4} />
                <div className="info">
                  <h4 className="title4">
                    Long Lasting <br /> Brand Impact
                  </h4>
                  <p className="description">
                    Over 95% candidates with game based assessments have better
                    experience. <span className="theme-purple">80%</span> or
                    more have favorable impression of company.
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
