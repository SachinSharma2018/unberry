import {Link} from "react-router-dom";
import logoImage from "../../assets/images/logo/hiring-with-game-based-assessments.svg";
import ButtonOutline from "../buttons/buttonOutline";

// styles
import "./styles.scss";

function TopHeader() {
  return (
    <section className="top-header-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-6">
            <Link to="/">
              <img alt="Hiring with Game-Based Assessments" src={logoImage} className="logo" />
            </Link>
          </div>
          <div className="col-sm-6 col-6 text-right">
            <a href="#hiring"><ButtonOutline title="Book a Demo" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
