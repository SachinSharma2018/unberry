import {useState, useEffect} from "react";
import grid1 from "../../../assets/images/shapes/big-grid.svg";
import grid2 from "../../../assets/images/shapes/big-grid2.svg";
import shape1 from "../../../assets/images/shapes/g1.svg";
import HorizontalProgress from "../../horizontalProgress";
import {Controller, Scene} from "react-scrollmagic";

import "./styles.scss";

function HoldupSection() {
  const [width, setWidth] = useState(0);
  const [offset, setOffset] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      var elmnt = document.getElementById("myDIV");
      var rect = elmnt.getBoundingClientRect();
      var elemTop = rect.top;

      if (elemTop < -120 && !offset) {
        setOffset(true);
      }
    };

    let widthVal;
    if (offset) {
      widthVal = setInterval(() => setWidth(width + 5), 150);
    }
    return () => clearInterval(widthVal);
  }, [width, offset]);

  return (
    <section className="holdup-section-style" id="myDIV">
      <div id="trigger" />
      <div id="trigger2" />
      <div id="trigger3" />

      <Controller>
        <Scene duration={"100%"} pin triggerHook="onLeave">
          <div className="scroll-section scroll-first">
            <img
              alt=""
              src={grid1}
              className={!(width >= 100) ? "" : "animationActive"}
            />
            {width >= 100 && (
              <div className="shape-active animate__animated animate__fadeIn animate__delay-1s">
                <img alt="" src={grid2} />
              </div>
            )}
          </div>
        </Scene>
      </Controller>
      {!(width >= 100) ? (
        <div className="position-relative">
          <Controller>
            <Scene
              duration={1000}
              classToggle="section-show"
              triggerElement="#trigger2"
              pin
              triggerHook="onLeave"
            >
              <div className="action-section">
                <div className="container heading-section">
                  <div className="row">
                    <div className="col-sm-12">
                      <h4 className="title2 animate__animated animate__pulse">
                        Hold up one second..
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="progress-bar-style">
                  <HorizontalProgress width={width} />
                </div>
              </div>
            </Scene>
          </Controller>
        </div>
      ) : (
        <section className="scroll-second">
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <div className="content-section">
              <div className="science-box">
                “You can discover more about a person in an hour of play than a
                year of conversation.” — Plato
              </div>

              <img alt="" src={shape1} className="img-style" />
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

export default HoldupSection;
