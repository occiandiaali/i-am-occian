import React from 'react';
import { useHistory } from 'react-router-dom';

import './Web.css';

function Web() {
    const history = useHistory();
    return (
        <div className="container-fluid">
            <h2>Web Apps</h2>
            <div className="row">
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/news-aye.png")} alt="news aye" className="i-mg"/></a>
                    <p><a href="http://news-aye.firebaseapp.com" target="_blank" rel="noopener noreferrer">News Eye Now</a></p>
                </div>
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/wokfolio.png")} alt="wokfolio" className="i-mg"/></a>
                    <p><a href="https://wokfolio.herokuapp.com" target="_blank" rel="noopener noreferrer">WokFolio</a></p>
                </div>
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/qilobyt.png")} alt="qilobyt" className="i-mg"/></a>
                    <p><a href="https://qilobyt.herokuapp.com" target="_blank" rel="noopener noreferrer">Qilobyt</a></p>
                </div>
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/jv-cv-shot.png")} alt="online cv" className="i-mg"/></a>
                    <p><a href="https://jvc-cv.herokuapp.com" target="_blank" rel="noopener noreferrer">Online CVs</a></p>
                </div>
            </div>
            <button className="btn btn-success" onClick={() => history.goBack()}>Clear</button>

        </div>    
    );
}

export default Web;