import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

import enter1 from "../../../assets/images/portfolio/enter1.svg";
import enter2 from "../../../assets/images/portfolio/enter2.svg";
import enter3 from "../../../assets/images/portfolio/enter3.svg";

import shape1 from "../../../assets/images/shapes/b1.svg";
import shape2 from "../../../assets/images/shapes/b2.svg";
import shape3 from "../../../assets/images/shapes/b3.svg";

import "./styles.scss";

function EnterUnberry() {
  return (
    <section className="enter-unberry-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h4 className="title2">
              Enter <img alt="" src={logo} className="logo" />
            </h4>
            <p className="description">
              Revolutionising Candidate Assessment Through Gameplay
            </p>
          </div>
        </div>

        <div className="timeline-style">
          <div className="row mt--80">
            <div className="col-sm-6">
              <div className="info-sec">
                <img alt="" src={shape1} className="shape-img-style" />
                <div className="info">
                  <h4 className="title4">
                    Captivating And Challenging Mini Games
                  </h4>
                  <p className="description o-7">
                    Candidates go through a 45 minute gameplay, navigating
                    through complex situations.
                  </p>
                  <Link className="btn-link">Know More</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <img alt="" src={enter1} className="image" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="info-sec">
                <img alt="" src={shape2} className="shape-img-style"  />
                <div className="info">
                  <h4 className="title4">Gathering Thousands Of Data Points</h4>
                  <p className="description o-7">
                    Candidates go through a 45 minute gameplay, navigating
                    through complex situations.
                  </p>
                  <Link className="btn-link">Know More</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <img alt="" src={enter2} className="image" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="info-sec">
                <img alt="" src={shape3} className="shape-img-style"  />
                <div className="info">
                  <h4 className="title4">
                    Neuroscience & Psychology Based Reports
                  </h4>
                  <p className="description o-7">
                    Candidates go through a 45 minute gameplay, navigating
                    through complex situations.
                  </p>
                  <Link className="btn-link">Know More</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <img alt="" src={enter3} className="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterUnberry;
