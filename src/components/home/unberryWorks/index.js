import shape1 from "../../../assets/images/shapes/c1.svg";
import shape2 from "../../../assets/images/shapes/c2.svg";
import shape3 from "../../../assets/images/shapes/c3.svg";

import "./styles.scss";

function UnberryWorks() {
  return (
    <section className="unberry-works-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h4 className="title2">
              Here's How Unberry Works. <br/> It’s simply a game changer
            </h4>
          </div>
        </div>

        <div className="row mt--30">
          <div className="col-sm-4">
            <div className="content-box">
              <div className="info">
                <div className="number">1</div>
                <h4 className="title4">
                  We create your custom screening benchmarks.
                </h4>
                <p className="description">
                  We do Unberry rounds with your teams, lay out their traits and
                  create your custom profile. It'll help find what 'good' looks
                  like for each role
                  image
                </p>
              </div>
              <img alt="" src={shape1} />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="content-box">
              <div className="info">
                <div className="number">2</div>
                <h4 className="title4">
                  Candidates play remotely and get assessed immediately
                </h4>
                <p className="description">
                  A link with automated Unberry gameplay takes care of
                  everything
                </p>
              </div>

              <img alt="" src={shape2} />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="content-box">
              <div className="info">
                <div className="number">3</div>
                <h4 className="title4">
                  You get detailed reports with relevant, predictive insights.
                </h4>
                <p className="description">
                  With insights around multi-level traits, make data-driven
                  probes during hiring and more informed & faster decisions
                </p>
              </div>
              <img alt="" src={shape3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnberryWorks;
