import React from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Web from './Web';
import Mobile from './Mobile';
import Game from './Game';

import './Portfolio.css';

function Portfolio() {
    return(
        <div className="container">
            <h1>Portfolio</h1>
            <h5><strong>Over the years I have attempted to achieve competence in software development mostly via "learning by doing"</strong></h5> 
            <h5><strong>and built "starter" projects for web, mobile, and games</strong></h5>
            <p>Tap on images to view samples</p>
                    
            <Router>
            <p><Link to="/web">Web</Link> | <Link to="/mobile">Mobile</Link> | <Link to="/game">Games</Link> <img src={require('../assets/images/arrow-side.png')} alt="arrow" id="arrow"/></p> 
            <Route path="/web"><Web /></Route>
            <Route path="/mobile"><Mobile /></Route>
            <Route path="/game"><Game /></Route>
            </Router>
        </div>
    );
}

export default Portfolio;