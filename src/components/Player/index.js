import React from "react";
import "../../app.css";

function Player(props) {
  return (
    <div className="container">
        <div className="row">

            <div className="pageTitle">
                <h1 className=""><i className="fas fa-user"></i>  Me</h1>
            </div>

        </div>

        <div className="row row1">
            <div>
                <img className="avatar" src="/assets/images/velocibarkSquare.png" alt="Player Avatar"/>
            </div>
            <div className="playerInfo justify-content-start">
                <h1 className="playerName">Velocibark</h1>
                <h1>Score: <span className="playerScore">14,243</span></h1>
            </div>
        </div>

    </div>
    );  
}

export default Player;