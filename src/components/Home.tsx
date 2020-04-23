import React from "react";

import Bio from "./Bio";
import Portfolio from './Portfolio';


import "./Home.css";

function Home() {
  return (
    <div id="demo" className="carousel slide" data-interval="false" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h1>Occian Fumnanya Diaali</h1>
          <p>Formerly known as <strong>Patrick C. Diali</strong></p>
          <h3>Solutionist. Software developer.</h3>
          <p>
            <a href="https://github.com/occiandiaali" target="_blank" rel="noopener noreferrer">github</a> | <a href="https://twitter.com/occiandiaali" target="_blank" rel="noopener noreferrer">twitter</a> |{" "}
            <a href="https://www.linkedin.com/in/occiandiaali/" target="_blank" rel="noopener noreferrer">linkedin</a> | <a href="https://medium.com/@occiandiaali" target="_blank" rel="noopener noreferrer">medium</a>{" "}
          </p>
        </div>
        <div className="carousel-item">
          <Bio />
        </div>
        <div className="carousel-item">
          <Portfolio />
        </div>

      </div>

      <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Home;
