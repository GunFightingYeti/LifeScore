import React from "react";
import "./../../app.css";

function Browse(props) {
  return (
    <div className="container">
        <div className="row">

            <div className="pageTitle">
                <h1 className=""><i className="fas fa-journal-whills"></i>  Browse</h1>
            </div>

        </div>

        <div className="row3">
            <div className="col-12">

                <a className="homebtn" href="/browseAll">All</a>
                <a className="homebtn" href="/browseLife">Life</a>
                <a className="homebtn" href="/browseFood">Food</a>
                <a className="homebtn" href="/browseSocial">Social</a>
                <a className="homebtn" href="/browseTravel">Travel</a>
                <a className="homebtn" href="/browseViolent">Violent</a>
                <a className="homebtn" href="/saved">Saved</a>

            </div>
        </div>
    </div>
    );  
}

export default Browse;