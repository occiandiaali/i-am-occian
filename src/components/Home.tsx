import React from "react";

import Bio from './Bio';
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
        {/* <img src="https://cdn.pixabay.com/photo/2017/03/22/23/36/bear-2166796__340.png" alt="Los Angeles" className="ava" /> */}
            <h1>Occian Fumnanya Diaali</h1>
            <h3>Solutionist. Software developer.</h3>
  <p><a href="/">github</a> | <a href="/">twitter</a> | <a href="/">linkedin</a> | <a href="/">medium</a> </p>
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
