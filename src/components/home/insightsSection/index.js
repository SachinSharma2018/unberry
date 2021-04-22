import {Link} from "react-router-dom";
import Flickity from "react-flickity-component";
import image1 from "../../../assets/images/portfolio/i1.jpg";
import image2 from "../../../assets/images/portfolio/i2.jpg";
import image3 from "../../../assets/images/portfolio/i3.jpg";

import "./styles.scss";

function InsightsSection() {
  const flickityOptions = {
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false,
  };

  return (
    <section className="insights-section-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h4 className="title2">Our Most Recent Insights</h4>
          </div>
        </div>

        <Flickity
          className={"carousel outline-none"}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={false}
        >
          <div className="image-card">
            <img alt="" src={image1} className="image-style" />
            <div className="info">
              Monday 19 March 2021 <span className="theme-purple">• Blog</span>
            </div>
            <h4 className="title4">
              It’s All Greek To Me: Working With ReGeneration
            </h4>
            <div className="description">
              Greek millenials are currently facing one of the toughest job
              markets across Europe, with alm…
            </div>
            <Link className="btn-link">
              <span>KNOW MORE</span>
            </Link>
          </div>

          <div className="image-card">
            <img alt="" src={image2} className="image-style" />
            <div className="info">
              Monday 19 March 2021{" "}
              <span className="theme-purple">• Case Study</span>
            </div>
            <h4 className="title4">
              What is an HRIS? An HR Practitioner’s Guide
            </h4>
            <div className="description">
              Granted, this first article on our must-read list isn’t the most
              exciting one. In fact, it’s rather dry.
            </div>
            <Link className="btn-link">
              <span>KNOW MORE</span>
            </Link>
          </div>

          <div className="image-card">
            <img alt="" src={image3} className="image-style" />
            <div className="info">
              Monday 19 March 2021 <span className="theme-purple">• Blog</span>
            </div>
            <h4 className="title4">
              Microsoft Teams, Slack, Facebook Workplace Are Taking Over: And We
            </h4>
            <div className="description">
              Greek millenials are currently facing one of the toughest job
              markets across Europe, with alm…
            </div>
            <Link className="btn-link">
              <span>KNOW MORE</span>
            </Link>
          </div>
        </Flickity>
      </div>
    </section>
  );
}

export default InsightsSection;
