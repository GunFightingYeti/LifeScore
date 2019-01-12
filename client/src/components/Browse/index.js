import React, { Component } from "react";

class Browse extends Component {
  state = {
    results: []
  }

render() {
    return (
    <div className="container">
        <div className="row">

            <div className="pageTitle">
                <h1 className=""><i className="fas fa-journal-whills"></i>  Browse</h1>
            </div>

        </div>

        <div className="row3">
            <div className="col-12">

                <button className="homebtn" id="/browseAll">All</button>
                <button className="homebtn" id="/browseLife">Life</button>
                <button className="homebtn" id="/browseFood">Food</button>
                <button className="homebtn" id="/browseSocial">Social</button>
                <button className="homebtn" id="/browseTravel">Adventure</button>
                <button className="homebtn" id="/browseSkills">Skills</button>
                <button className="homebtn" id="/browseFun">Fun</button>
                <button className="homebtn" id="/browseViolent">Violent</button>
                <a className="homebtn" href="/saved">Saved</a>

            </div>
        </div>
    </div>
    );  
}
}

export default Browse;