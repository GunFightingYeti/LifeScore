import React from "react";
import "../../app.css";

function Home(props) {
  return (
    <div className="container home">

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
        <h3>Latest: <span className="achievement">Climb a 14er</span></h3>
        </div>

        <div className="row row3">
            <div className="col-12">

                <a className="homebtn" href="/browse">Browse</a>
                <a className="homebtn" href="/friends">Friends</a>
                <a className="homebtn" href="/stats">Stats</a>
                <a className="homebtn" href="/saved">Saved</a>

            </div>
        </div>

    </div>
    );  
}

export default Home;