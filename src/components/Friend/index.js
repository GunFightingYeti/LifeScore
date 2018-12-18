import React from "react";
import "./../../app.css";

function Friend(props) {
  return (
    <div className="container">

        <div className="row row1">
            <div>
                <img className="avatar" src="/assets/images/placeholder.jpg" alt="Player Avatar"/>
            </div>
            <div className="playerInfo justify-content-start">
                <h1 className="playerName">Knurtts</h1>
                <h1>Score: <span className="playerScore">17,652</span></h1>
            </div>
        </div>

        <div className="row row2">
        <h3>Last achievement: </h3>
        <h3 className="achievement">Dance if you wanna</h3>
        </div>

        <div className="row row2">
            <ul>
                <li><span className="value">5 V</span> - <span className="achievement">Eat Sushi</span></li>
                <li><span className="value">5 V</span> - <span className="achievement">Climb a tree</span></li>
                <li><span className="value">20 V</span> - <span className="achievement">Win a trophy</span></li>
            </ul>
        </div>

    </div>
    );  
}

export default Friend;