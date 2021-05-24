import {useEffect, useState} from "react";
import VerticalProgress from "../../verticalProgress";

// Video Files
import video1 from "../../../assets/videos/hiring1.mp4";
import video2 from "../../../assets/videos/hiring2.mp4";
import video3 from "../../../assets/videos/hiring3.mp4";

import "./styles.scss";

function RapidlyEvolving(props) {
  const [height, setHeight] = useState(0);
  const [height2, setHeight2] = useState(0);
  const [height3, setHeight3] = useState(0);

  const timelineData = [
    {
      title: "Focus on potential",
      description: `Evidence suggests that nearly 50% applicants embellish
      their CVs, reducing the utility of résumés as initial
      screening tools.`,
      height: height,
    },
    {
      title: "Avoid bad hires",
      description: `46% of new hires failed within 18 months. 89% of them were
      due to attitude or personality issues. Makes perfect sense
      to hire first time right, eh?`,
      height: height2,
    },
    {
      title: "Identify your best-fit",
      description: `Top Performers yields up to 67% more productivity and
      profit. Know the key traits required for successful teams,
      identify your best fit accordingly.`,
      height: height3,
    },
  ];

  const [offset, setOffset] = useState(false);
  const [videoSource, setVideoSource] = useState(video1);
  const [timeline, setTimeline] = useState(timelineData[0]);

  // Step One
  useEffect(() => {
    window.onscroll = () => {
      var elmnt = document.getElementById("myDIV");
      var rect = elmnt.getBoundingClientRect();
      var elemTop = rect?.top;

      if (elemTop < -150 && !offset) {
        setOffset(true);
      }
    };

    var elmntItem = document.getElementById("item1");

    let heightVal;
    if (offset && height <= 100) {
      heightVal = setInterval(() => setHeight(height + 5), 320);
    }
    elmntItem.classList.add("timeline-active");
    return () => clearInterval(heightVal);
  }, [height, offset]);

  // Step Two
  useEffect(() => {
    var elmnt = document.getElementById("item2");
    let heightVal2;
    if (height >= 100 && height2 <= 100) {
      heightVal2 = setInterval(() => setHeight2(height2 + 3), 120);
      elmnt?.classList.add("timeline-active");
      setVideoSource(video2);
      setTimeline(timelineData[1]);
    }
    return () => clearInterval(heightVal2);
  }, [height2, height, offset]);

  // Step Three
  useEffect(() => {
    var elmnt = document.getElementById("item3");
    let heightVal3;
    if (height2 >= 100 && height3 <= 100) {
      heightVal3 = setInterval(() => setHeight3(height3 + 5), 300);
      elmnt?.classList.add("timeline-active");
      setVideoSource(video3);
      setTimeline(timelineData[2]);
    }
    return () => clearInterval(heightVal3);
  }, [height3, height2, offset]);

  useEffect(() => {
    document.getElementById("vid").play();
  }, [videoSource]);

  // const getHeight=(index)=>{​​
  //   if(index===0){return height1 } else if(index===1){ return height2}else {return height3}
  // }​​

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
          <div className="row row-container">
            <div className="col-sm-6 hide-mobile">
              <div className="timeline-style">
                {timelineData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="timeline-item"
                      id={`item${index + 1}`}
                    >
                      <VerticalProgress height={data.height} />

                      <div className="content">
                        <h4 className="title4">{data.title}</h4>
                        <div className="description o-7">
                          {data.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* for mobile */}
            <div className="col-sm-6 order-mobile1 d-sm-none">
              <div className="timeline-style">
                <div className="timeline-item timeline-active">
                  <div className="content">
                    <h4 className="title4"> {timeline.title}</h4>
                    <div className="description o-7">
                      {timeline.description}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-progress-bar">
                <VerticalProgress height={height} />
                <VerticalProgress height={height2} />
                <VerticalProgress height={height3} />
              </div>
            </div>
            <div className="col-sm-6 order-mobile2">
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
