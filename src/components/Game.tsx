import React from 'react';
import { useHistory } from 'react-router-dom';

function Game() {
    const history = useHistory();
    return(
        <div className="container-fluid">
            <h2>Games</h2>
            <div className="row">
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/egg-smash.jpg")} alt="egg smash" className="i-mg"/></a>
                    <p><a href="/">Egg Smash</a></p>
                </div>
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/bray-bee-shot.jpg")} alt="bray bee" className="i-mg"/></a>
                    <p><a href="/">Bray the bee</a></p>
                </div>
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/game3.jpg")} alt="deeb chibi" className="i-mg"/></a>
                    <p><a href="/">Deeb Chibi</a></p>
                </div>
                <div className="col-sm">
                <a href="/"><img src={require("../assets/images/game4.jpg")} alt="match 3" className="i-mg"/></a>
                    <p><a href="/">Match 3</a></p>
                </div>
                <div className="col-sm">
                    <a href="/"><img src={require("../assets/images/game5.jpg")} alt="dodge reds" className="i-mg"/></a>
                    <p><a href="/">Dodge Reds</a></p>
                </div>
            </div>
            <button className="btn btn-success" onClick={() => history.goBack()}>Clear</button>


        </div>
    );
}

export default Game;