import React from 'react';

import './Web.css';

function Web() {
    return (
        <div className="container-fluid">
            <h1>Web Apps</h1>
            <div className="row">
                <div className="col-sm">
                    <img src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg" alt="news aye" className="i-mg"/>
                    <p><a href="http://news-aye.firebaseapp.com" target="_blank" rel="noopener noreferrer">News Eye Now</a></p>
                </div>
                <div className="col-sm">
                    <img src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg" alt="wokfolio" className="i-mg"/>
                    <p><a href="https://wokfolio.herokuapp.com" target="_blank" rel="noopener noreferrer">WokFolio</a></p>
                </div>
                <div className="col-sm">
                    <img src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg" alt="qilobyt" className="i-mg"/>
                    <p><a href="https://qilobyt.herokuapp.com" target="_blank" rel="noopener noreferrer">Qilobyt</a></p>
                </div>
                <div className="col-sm">
                    <img src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg" alt="online cv" className="i-mg"/>
                    <p><a href="https://jvc-cv.herokuapp.com" target="_blank" rel="noopener noreferrer">Online CVs</a></p>
                </div>
            </div>

        </div>    
    );
}

export default Web;