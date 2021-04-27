import {Link} from "react-router-dom";
import logoImage from "../../assets/images/logo/logo.svg";

// styles
import "./styles.scss";

function FooterPrimary() {
  return (
    <section className="footer-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <img src={logoImage} className="footer-logo" alt="" />
            <div className="decription d-sm-none mt--10">
              Combining game technology, data science and neuroscience to
              surface precise signals and disrupt the way companies recruit,
              retain and develop talent.
            </div>
          </div>
          <div className="col-sm-3">
            <h4 className="title4">Resources</h4>
            <nav>
              <Link to="/">Unberry</Link>
              <Link to="/">Assessments</Link>
              <Link to="/">Support</Link>
            </nav>
          </div>
          <div className="col-sm-3">
            <h4 className="title4">Legal</h4>
            <nav>
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms of service</Link>
            </nav>
          </div>
          <div className="col-sm-3">
            <h4 className="title4">Company</h4>
            <nav>
              <Link to="/">About</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Contact us</Link>
            </nav>
          </div>
        </div>

        <div className="copyright-section">
          <div className="row">
            <div className="col-sm-6">
              Made with ❤️ lots of love, for Grappus by Grappus.
            </div>
            <div className="col-sm-6 text-right">
              © All rights reserved by Grappus 2021
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterPrimary;
