import { useState } from "react";
import InputPrimary from "../../inputPrimary";
import checked from "../../../assets/images/checked.svg"
import "./styles.scss";

function HiringBox() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState("");

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function emailSubmit(email) {
    if (validateEmail(email)) {
      window.dataLayer.push({
        email: email,
        event: "notificationDemo",
      });

      setEmail("");
      setValid(false);
    }
  }
  return (
    <section className="hiring-section" id="hiring">
      <div className="content-box">
        <h1 className="title2">Take the Guesswork out...</h1>
        <p className="description o-7 mt--15">
          Transform the way you hire - by taking out inefficiencies and biases.
          By switching to a smarter, unbiased, tech-driven and experiential way
          of hiring.
        </p>
        <div className="newsletter-section">
          <InputPrimary placeholder="hereisme@myofficalmail.com" 
          icon={valid ? checked : null}
            onChange={(e) => {
              validateEmail(e.target.value)
                ? setValid(true)
                : setValid(false);

              setEmail(e.target.value);
            }}
            value={email} />
          <button className="started-btn" onClick={() => {
            emailSubmit(email);
          }}>Get started</button>
        </div>
      </div>
      <div className="shape1" />
      <div className="shape2" />
    </section>
  );
}

export default HiringBox;
