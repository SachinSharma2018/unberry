import VerticalProgress from "../../verticalProgress";
import video1 from "../../../assets/videos/hiring1.mp4";

import "./styles.scss";
import {useEffect} from "react";

function RapidlyEvolving() {
  useEffect(() => {
    document.getElementById("vid").play();
  }, []);
  return (
    <section className="rapidly-evolving-style">
      <div className="container">
        <div className="row heading-sec">
          <div className="col-sm-6">
            <h4 className="title2">The hiring landscape is rapidly evolving</h4>
            <div className="description xs">
              Are you playing the best of your hiring game?
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="timeline-style">
              <div className="timeline-item timeline-active">
                <VerticalProgress number="70" />
                <div className="content">
                  <h4 className="title4"> Focus on potential</h4>
                  <div className="description o-7">
                    Evidence suggests that nearly 50% applicants embellish their
                    CVs, reducing the utility of résumés as initial screening
                    tools.
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <VerticalProgress number="0" />
                <div className="content">
                  <h4 className="title4"> Avoid bad hires</h4>
                  <div className="description o-7">
                    46% of new hires failed within 18 months. 89% of them were
                    due to attitude or personality issues. Makes perfect sense
                    to hire first time right, eh?
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <VerticalProgress number="0" />
                <div className="content">
                  <h4 className="title4"> Identify your best-fit</h4>
                  <div className="description o-7">
                    Top Performers yields up to 67% more productivity and
                    profit. Know the key traits required for successful teams,
                    identify your best fit accordingly.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="videoAnimation">
              <video autoplay muted id="vid" loop>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RapidlyEvolving;
