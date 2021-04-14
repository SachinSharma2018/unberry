import {Link} from "react-router-dom";
import logoImage from "../../assets/images/logo.svg";
import ButtonOutline from "../buttons/buttonOutline";

// styles
import "./styles.scss";

function TopHeader() {
  return (
    <section className="top-header-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Link to="/">
              <img src={logoImage} className="logo" />
            </Link>
          </div>
          <div className="col-sm-6 text-right">
            <ButtonOutline title="Book Demo"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
