import {useState, useEffect} from "react";
import grid1 from "../../../assets/images/big-grid.svg";
import grid2 from "../../../assets/images/big-grid2.svg";
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

      if (elemTop < 50 && !offset) {
        setOffset(true);
      }
    };

    let widthVal;
    if (offset) {
      widthVal = setInterval(() => setWidth(width + 5), 500);
    }
    return () => clearInterval(widthVal);
  }, [width, offset]);

  return (
    <Controller>
      <Scene duration={700} pin triggerHook="onLeave">
        <section className="holdup-section-style" id="myDIV">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h4 className="title2">Hold up one second..</h4>
              </div>
            </div>
          </div>

          {!(width >= 100) ? (
            <div>
              <div className="scroll-section">
                <img src={grid1} />
              </div>
              <div>
                <HorizontalProgress width={width} />
              </div>
            </div>
          ) : (
            <div className="animate__animated animate__fadeIn animate__fast">
              <div className="scroll-section">
                <img src={grid2} />
              </div>
              <div className="content-section">
                <div className="science-box">
                  Science-backed games can present multi-dimensional stimuli to
                  reveal a lot about players cognition and behaviour.
                </div>

                <img src={shape1} className="img-style" />
              </div>
            </div>
          )}
        </section>
      </Scene>
    </Controller>
  );
}

export default HoldupSection;
