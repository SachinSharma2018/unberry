// Images
import {useState} from "react";
import logo from "../../../assets/images/logo/logo.svg";
import enter1 from "../../../assets/images/portfolio/enter1.png";
import enter2 from "../../../assets/images/portfolio/enter2.svg";
import enter3 from "../../../assets/images/portfolio/enter3.svg";
import shape1 from "../../../assets/images/shapes/b1.svg";
import shape2 from "../../../assets/images/shapes/b2.svg";
import shape3 from "../../../assets/images/shapes/b3.svg";

import "./styles.scss";

function EnterUnberry() {
  const media = window.matchMedia(`(min-width: 768px)`);

  const [isOpened1, setIsOpened1] = useState(media.matches ? true : false);
  const toggle1 = () => setIsOpened1(true);

  const [isOpened2, setIsOpened2] = useState(media.matches ? true : false);
  const toggle2 = () => setIsOpened2(true);

  const [isOpened3, setIsOpened3] = useState(media.matches ? true : false);
  const toggle3 = () => setIsOpened3(true);

  return (
    <section className="enter-unberry-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h4 className="title2">
              Enter <img alt="" src={logo} className="logo" />
            </h4>
            <p className="description">
              Revolutionising Candidate Assessment Through Game <br />{" "}
              Technology and Neuroscience
            </p>
          </div>
        </div>

        <div className="timeline-style">
          <div className="row mt--80 align-items-center">
            <div className="col-sm-6">
              <div className="info-sec">
                <img alt="" src={shape1} className="shape-img-style" />
                <div className="info">
                  <h4 className="title4">
                    Game Based <br /> Assessments
                  </h4>
                  <p className="description o-7">
                    “Research says multi-measure tests are the best way to
                    predict job performance; experience and personality tests
                    are the worst.”
                  </p>
                  {isOpened1 && (
                    <ul className="list-section">
                      <li className="list-item">
                        Dynamic Scenarios doing Multi-Trait Analysis
                      </li>

                      <li className="list-item">
                        Real-time Decisions and Authentic Responses
                      </li>
                      <li className="list-item">
                        Beyond Self-Reported Data and Consciously Constructed
                        Behaviors
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <img alt="" src={enter1} className="image" />
            </div>

            {!isOpened1 && (
              <div className="button-section">
                <button className="more-detail" onClick={toggle1}>
                  View More
                </button>
              </div>
            )}
          </div>

          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="info-sec">
                <img alt="" src={shape2} className="shape-img-style" />
                <div className="info">
                  <h4 className="title4">
                    Data Science backed <br /> Evaluation
                  </h4>
                  <p className="description o-7">
                    “When it comes to choosing a candidate, traditional
                    interviews are as much use as flipping a coin - Professor,
                    University of Michigan.”
                  </p>
                  {isOpened2 && (
                    <ul className="list-section">
                      <li className="list-item">
                        Exhaustive and Extensive Data Points
                      </li>

                      <li className="list-item">
                        Account Process and Outcome Objectively
                      </li>
                      <li className="list-item">
                        Unbiased and Fair Evaluation
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <img alt="" src={enter2} className="image" />
            </div>

            {!isOpened2 && (
              <div className="button-section">
                <button className="more-detail" onClick={toggle2}>
                  View More
                </button>
              </div>
            )}
          </div>

          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="info-sec">
                <img alt="" src={shape3} className="shape-img-style" />
                <div className="info">
                  <h4 className="title4">
                    Neuroscience & Psychology <br /> Based Reports
                  </h4>
                  <p className="description o-7">
                    Unberry reports Cognitive and Personality traits to predict
                    real-world outcomes, all based on neuroscience and
                    psychology principles.
                  </p>
                  {isOpened3 && (
                    <ul className="list-section">
                      <li className="list-item">
                        New Age Traits for High Performing Workplaces
                      </li>
                      <li className="list-item">
                        Candid Observations and Normative Reports
                      </li>
                      <li className="list-item">
                        Decode and Hire basis DNA of Existing Teams
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <img alt="" src={enter3} className="image" />
            </div>

            {!isOpened3 && (
              <div className="button-section">
                <button className="more-detail" onClick={toggle3}>
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterUnberry;
