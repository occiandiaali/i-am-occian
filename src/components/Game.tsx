import React from 'react';
import { useHistory } from 'react-router-dom';

import Modal from './Modal';

function Game() {
    const history = useHistory();
    return (
        <div className="container-fluid">
            <h2>Games</h2>
            <div className="row">
                <div className="col-sm">
                    <img src={require("../assets/images/game3.jpg")} alt="deeb chibi" className="i-mg" data-toggle="modal" data-target="#deebchibiModal"/>
                    <p className="title">Deeb Chibi</p>
                </div>
                <div className="col-sm">
                    <img src={require("../assets/images/game4.jpg")} alt="match 3" className="i-mg" data-toggle="modal" data-target="#match3Modal" />
                    <p className="title">Match 3</p>
                </div>
                <div className="col-sm">
                    <img src={require("../assets/images/game5.jpg")} alt="dodge reds" className="i-mg" data-toggle="modal" data-target="#dodgeredModal"/>
                    <p className="title">Dodge Reds</p>
                </div>
                <div className="col-sm">
                    <img src={require("../assets/images/alien-shot.png")} alt="dodge reds" className="i-mg" data-toggle="modal" data-target="#alienModal"/>
                    <p className="title">Alien</p>
                </div>
            </div>
            <button className="btn btn-success" onClick={() => history.goBack()}>Clear</button>

            <Modal />


        </div> // {/* container fluid */}
    );
}

export default Game;