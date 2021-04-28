import shape1 from "../../../assets/images/shapes/c1.svg";
import shape2 from "../../../assets/images/shapes/c2.svg";
import shape3 from "../../../assets/images/shapes/c3.svg";
import Flickity from "react-flickity-component";

import "./styles.scss";

function UnberryWorks() {
  const media = window.matchMedia(`(min-width: 768px)`);

  const flickityOptions = {
    freeScroll: true,
    contain: true,
    prevNextButtons: media.matches ? false : true,
    pageDots: false,
    wrapAround: true,
  };

  const infoBoxes = [
    {
      number: 1,
      title: "We create your custom screening benchmarks.",
      description: `We do Unberry rounds with your teams, lay out their traits
      and create your custom profile. It'll help find what 'good'
      looks like for each role image`,
      imgUrl: shape1,
    },
    {
      number: 2,
      title: "Candidates play remotely and get assessed immediately",
      description: `A link with automated Unberry gameplay takes care of
      everything`,
      imgUrl: shape2,
    },
    {
      number: 3,
      title: "You get detailed reports with relevant, predictive insights.",
      description: `With insights around multi-level traits, make data-driven
      probes during hiring and more informed & faster decisions`,
      imgUrl: shape3,
    },
  ];
  return (
    <section className="unberry-works-style">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h4 className="title2">
              Here's How Unberry Works. <br /> It’s simply a game changer
            </h4>
          </div>
        </div>

        <div className="row mt--30">
          <div className="col-sm-12">
            <Flickity
              className={"carousel outline-none worksSlider"}
              elementType={"div"}
              options={flickityOptions}
              disableImagesLoaded={false}
            >
              {infoBoxes.map((data, index) => {
                return (
                  <div className="col-sec" key={index}>
                    <div className="content-box">
                      <div className="info">
                        <div className="number">{data.number}</div>
                        <h4 className="title4">{data.title}</h4>
                        <p className="description">{data.description}</p>
                      </div>
                      <img alt="" src={data.imgUrl} />
                    </div>
                  </div>
                );
              })}
            </Flickity>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnberryWorks;
