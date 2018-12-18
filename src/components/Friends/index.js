import React from "react";
import "./../../app.css";

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

               <a href="/friend"><button className="friendCard">GunFightingYeti</button></a>
               <a href="/friend"><button className="friendCard">Knurtts</button></a>
               <a href="/friend"><button className="friendCard">Scarab27</button></a>
               <a href="/friend"><button className="friendCard">Drizzt172</button></a>
               <a href="/friend"><button className="friendCard">WriterManda</button></a>
               <a href="/friend"><button className="friendCard">GenZip</button></a>
               <a href="/friend"><button className="friendCard">Krontime</button></a>
               <a href="/friend"><button className="friendCard">Gummybearx3</button></a>
               <a href="/friend"><button className="friendCard">SassyCat</button></a>

            </div>
        </div>
    </div>
    );  
}

export default Friends;