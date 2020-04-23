import React from 'react';
import { useHistory } from 'react-router-dom';

import Modal from './Modal';

function Mobile() {
    const history = useHistory();
    return(
        <div className="container-fluid">
            <h2>Mobile Apps</h2>
            <div className="row">
                <div className="col-sm">
                <img src={require("../assets/images/gidi.jpg")} alt="gidi guide" className="i-mg"data-toggle="modal" data-target="#gidiModal"/>
                    <p className="title">Gidi Guide</p>
                </div>
                <div className="col-sm">
                <img src={require("../assets/images/timbr-shot.png")} alt="boy" className="i-mg" data-toggle="modal" data-target="#timbrModal"/>
                    <p className="title">Timbr</p>
                </div>
                <div className="col-sm">
                <img src={require("../assets/images/react-web.jpg")} alt="boy" className="i-mg"/>
                    <p className="title">MeetApp</p>
                </div>
                
            </div>
            <button className="btn btn-success" onClick={() => history.goBack()}>Clear</button>

            <Modal />

        </div> // container fluid
    );
}

export default Mobile;