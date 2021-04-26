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
                  like for each role Design - Only bottom part of tetris blocks
                  remains - to show company's fixed DNA. Increase use of violet
                  in the block. Do not show variety of pieces above it in this
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
                  everything Design - Include the one that fits in the third
                  image as an option, meaning you don't know which one to choose
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
                  Design - Make the bottom block more violet heavy (use same
                  block in first point as well)
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
