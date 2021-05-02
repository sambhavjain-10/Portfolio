import React from "react";
import Dp from "../images/dp.webp";

function Home() {
  return (
    <>
      <div className="home-bg" id="home">
        <center>
          <img
            src={Dp}
            data-aos="zoom-in"
            data-aos-offset="0"
            className="dp"
            alt=""
          />
          <br />
          <span className="dp-text">SAMBHAV JAIN</span>
          <br />
          <pre>
            <span className="dp-text2">
              FULL STACK
              <br />
              DEVELOPER
            </span>
          </pre>
        </center>
      </div>
    </>
  );
}

export default Home;
