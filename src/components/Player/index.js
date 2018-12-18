import React from "react";
import "./../../app.css";

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

        <div className="row row2">
        <h3>Latest: <span className="value">15 V</span><span className="achievement">Climb a 14er</span></h3>
        </div>

        <div className="row row2">
            <ul>
                <li><span className="value">5 V</span> - <span className="achievement">Cut ties with all the lies you've been living in</span></li>
                <li><span className="value">20 V</span> - <span className="achievement">Eat a 1,000,000+ scoville pepper</span></li>
                <li><span className="value">25 V</span> - <span className="achievement">Break a brick with your hand (without breaking your hand) </span></li>
            </ul>
        </div>

    </div>
    );  
}

export default Player;