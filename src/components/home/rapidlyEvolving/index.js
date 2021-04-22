import imgTest from "../../../assets/images/test2.png";
import VerticalProgress from "../../verticalProgress";

import "./styles.scss";

function RapidlyEvolving() {
  return (
    <section className="rapidly-evolving-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4 className="title2">The hiring landscape is rapidly evolving</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="timeline-style">
              <div className="timeline-item timeline-active">
              <VerticalProgress number="70"/>
                <div className="content">
                  <h4 className="title4"> Focus on potential</h4>
                  <div className="description o-7">
                    Look beyond past credentials and identify predictors of
                    potential
                  </div>
                </div>
              </div>

              <div className="timeline-item">
              <VerticalProgress number="0"/>
                <div className="content">
                  <h4 className="title4"> Avoid bad hires</h4>
                  <div className="description o-7">
                    Because it makes absolute business sense to hire first time
                    right.
                  </div>
                </div>
              </div>

              <div className="timeline-item">
              <VerticalProgress number="0"/>
                <div className="content">
                  <h4 className="title4"> Identify your best-fit</h4>
                  <div className="description o-7">
                    A team that gels together is one of the best predictors of
                    success.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img alt="" src={imgTest} className="img-style" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RapidlyEvolving;
