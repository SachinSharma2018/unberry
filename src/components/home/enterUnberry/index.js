import {useEffect} from "react";
// Images
import logo from "../../../assets/images/logo/hiring-with-game-based-assessments.svg";
import shape1 from "../../../assets/images/shapes/b1.svg";
import shape2 from "../../../assets/images/shapes/b2.svg";
import shape3 from "../../../assets/images/shapes/b3.svg";

// Lottie
import Lottie from "react-lottie";
import animationShape2 from "../../../assets/json/data-science.json";
import animationShape3 from "../../../assets/json/psychology.json";
import videoSource from "../../../assets/videos/game-based.mp4";
import gameBasesPoster from "../../../assets/videos/game-based.png";

import "./styles.scss";

function EnterUnberry() {
  useEffect(() => {
    var vid = document.querySelector(".video-banner");
    vid.className = "video-banner loading";
    document
      .getElementById("team-video")
      .addEventListener("loadstart", () => {});
    document
      .getElementById("team-video")
      .addEventListener("canplaythrough", () => {
        vid.className = "video-banner";
      });
  }, []);

  return (
    <section className="enter-unberry-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h4 className="title2">
              Enter <img alt="" src={logo} className="logo" />
            </h4>
            <p className="description">
              Revolutionising Candidate Assessment Through Game <br />
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
                  <h2 className="title4">
                    Game Based <br /> Assessments
                  </h2>
                  <p className="description o-7">
                    “Research says multi-measure tests are the best way to
                    predict job performance; experience and personality tests
                    are the worst.”
                  </p>
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
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="video-banner">
                <video playsInline autoPlay muted loop id="team-video" poster={gameBasesPoster}>
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="info-sec">
                <img alt="" src={shape2} className="shape-img-style" />
                <div className="info">
                  <h2 className="title4">
                    Data Science backed <br /> Evaluation
                  </h2>
                  <p className="description o-7">
                    “When it comes to choosing a candidate, traditional
                    interviews are as much use as flipping a coin - Professor,
                    University of Michigan.”
                  </p>
                  <ul className="list-section">
                    <li className="list-item">
                      Exhaustive and Extensive Data Points
                    </li>

                    <li className="list-item">
                      Account Process and Outcome Objectively
                    </li>
                    <li className="list-item">Unbiased and Fair Evaluation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Lottie
                options={{
                  animationData: animationShape2,
                  loop: true,
                  autoplay: true,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="info-sec">
                <img alt="" src={shape3} className="shape-img-style" />
                <div className="info">
                  <h2 className="title4">
                    Neuroscience & Psychology <br /> Based Reports
                  </h2>
                  <p className="description o-7">
                    Unberry reports Cognitive and Personality traits to predict
                    real-world outcomes, all based on neuroscience and
                    psychology principles.
                  </p>
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
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <Lottie
                options={{
                  animationData: animationShape3,
                  loop: true,
                  autoplay: true,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterUnberry;
