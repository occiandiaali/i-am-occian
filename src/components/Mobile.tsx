import React from 'react';
import { useHistory } from 'react-router-dom';

function Mobile() {
    const history = useHistory();
    return(
        <div className="container-fluid">
            <h2>Mobile Apps</h2>
            <div className="row">
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/gidi.jpg")} alt="gidi guide" className="i-mg"/></a>
                    <p><a href="http://news-aye.firebaseapp.com">Gidi Guide</a></p>
                </div>
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/timbr-shot.png")} alt="boy" className="i-mg"/></a>
                    <p><a href="/">Timbr</a></p>
                </div>
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/react-web.jpg")} alt="boy" className="i-mg"/></a>
                    <p><a href="/">MeetApp</a></p>
                </div>
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/qoboqo.png")} alt="boy" className="i-mg"/></a>
                    <p><a href="/">QoboQo</a></p>
                </div>
            </div>
            <button className="btn btn-success" onClick={() => history.goBack()}>Clear</button>

        </div>
    );
}

export default Mobile;