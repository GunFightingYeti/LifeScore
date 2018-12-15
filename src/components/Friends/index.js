import React from "react";
import "../../app.css";

function Friends(props) {
  return (
    <div className="container">
        <div className="row">

            <div className="pageTitle">
                <h1 className=""><i className="fas fa-user-friends"></i> Friends</h1>
            </div>

        </div>

        <div className="row3">
            <div className="col-12">

                <button className="friendCard">GunFightingYeti</button>
                <button className="friendCard">Knurtts</button>
                <button className="friendCard">Scarab27</button>
                <button className="friendCard">Drizzt172</button>
                <button className="friendCard">WriterManda</button>
                <button className="friendCard">GenZip</button>
                <button className="friendCard">Krontime</button>
                <button className="friendCard">Gummybearx3</button>
                <button className="friendCard">SassyCat</button>

            </div>
        </div>
    </div>
    );  
}

export default Friends;