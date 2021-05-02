import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/lottie-player";

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="about-container" id="about">
        <div className="lottie">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <Lottie options={defaultOptions} height={350} width={350} />
        </div>
        <div className="about">
          <div className="para">
            <p>
              I'm Sambhav Jain, currently pursuing BCA from JECRC University
              (2018-2021). Learning Web Develeopment on my own through many
              online sources. Currently I'm capable of building a fully
              functional dynamic website, Contact me for projects below.
            </p>
          </div>
          <div className="skill">
            <div>
              <span>Languages : HTML, CSS, JAVASCRIPT, PHP</span>
              <span>Database : MYSQL, MONGODB</span>
            </div>
            <div>
              <span>ReactJs</span>
              <span>
                React
                <br />
                Native
              </span>
              <span>NodeJs</span>
              <span>ExpressJs</span>
              <span>Redux</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
