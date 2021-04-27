import {useEffect, useState} from "react";
import VerticalProgress from "../../verticalProgress";

// Scrollmagic and Gsap
import {TweenMax, TimelineMax} from "gsap";
import * as ScrollMagic from "scrollmagic";
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
import {ScrollMagicPluginIndicator} from "scrollmagic-plugins";

// Video Files
import video1 from "../../../assets/videos/hiring1.mp4";
import video2 from "../../../assets/videos/hiring2.mp4";
import video3 from "../../../assets/videos/hiring3.mp4";

import "./styles.scss";

function RapidlyEvolving() {
  const [height, setHeight] = useState(0);
  const [height2, setHeight2] = useState(0);
  const [height3, setHeight3] = useState(0);
  const [offset, setOffset] = useState(false);
  const [videoSource, setVideoSource] = useState(video1);

  useEffect(() => {
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    ScrollMagicPluginIndicator(ScrollMagic);

    const media = window.matchMedia(`(min-width: 768px)`);

    if (media.matches) {
      // Animation First Video
      var introAnimationcontroller = new ScrollMagic.Controller();

      var pinSceneIntro = new ScrollMagic.Scene({
        triggerElement: "#triggerSection",
        triggerHook: 0.02,
        duration: "100%",
      })
        .setPin("#triggerSection")
        // .addIndicators()
        .addTo(introAnimationcontroller);
    }
  }, []);

  // Step One
  useEffect(() => {
    window.onscroll = () => {
      var elmnt = document.getElementById("myDIV");
      var rect = elmnt.getBoundingClientRect();
      var elemTop = rect.top;

      if (elemTop < -150 && !offset) {
        setOffset(true);
      }
    };

    let heightVal;
    if (offset && height <= 100) {
      heightVal = setInterval(() => setHeight(height + 5), 320);
    }
    return () => clearInterval(heightVal);
  }, [height, offset]);

  // Step Two
  useEffect(() => {
    var elmnt = document.getElementById("item2");
    let heightVal2;
    if (height >= 100 && height2 <= 100) {
      heightVal2 = setInterval(() => setHeight2(height2 + 5), 120);
      elmnt.classList.add("timeline-active");
      setVideoSource(video2);
    }
    return () => clearInterval(heightVal2);
  }, [height2, height, offset]);

  // Step Three
  useEffect(() => {
    var elmnt = document.getElementById("item3");
    let heightVal3;
    if (height2 >= 100 && height3 <= 100) {
      heightVal3 = setInterval(() => setHeight3(height3 + 5), 300);
      elmnt.classList.add("timeline-active");
      setVideoSource(video3);
    }
    return () => clearInterval(heightVal3);
  }, [height3, height2, offset]);

  useEffect(() => {
    document.getElementById("vid").play();
  }, [videoSource]);

  return (
    <section className="rapidly-evolving-style" id="myDIV">
      <div className="content-section" id="triggerSection">
        <div className="container">
          <div className="row heading-sec">
            <div className="col-sm-6 col-12">
              <h4 className="title2">
                The hiring landscape is rapidly evolving
              </h4>
              <div className="description xs">
                Are you playing the best of your hiring game?
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="timeline-style">
                <div className="timeline-item timeline-active" id="item1">
                  <VerticalProgress height={height} />
                  <div className="content">
                    <h4 className="title4"> Focus on potential</h4>
                    <div className="description o-7">
                      Evidence suggests that nearly 50% applicants embellish
                      their CVs, reducing the utility of résumés as initial
                      screening tools.
                    </div>
                  </div>
                </div>

                <div className="timeline-item" id="item2">
                  <VerticalProgress height={height2} />
                  <div className="content">
                    <h4 className="title4"> Avoid bad hires</h4>
                    <div className="description o-7">
                      46% of new hires failed within 18 months. 89% of them were
                      due to attitude or personality issues. Makes perfect sense
                      to hire first time right, eh?
                    </div>
                  </div>
                </div>

                <div className="timeline-item" id="item3">
                  <VerticalProgress height={height3} />
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
                <video autoplay muted id="vid" loop key={videoSource}>
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RapidlyEvolving;
