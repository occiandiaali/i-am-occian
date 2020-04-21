import React from "react";

import Bio from "./Bio";
import Portfolio from './Portfolio';


import "./Home.css";

function Home() {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

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

      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
}

export default Home;
