import React from "react";
import "../../app.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container background-box">
            <h1>Life Score <i className="fab fa-xbox"></i></h1>
            <h4 className="white-shadow">Feel like you've achieved more in life</h4>
        </div>
    </div>
    );  
}

export default Jumbotron;