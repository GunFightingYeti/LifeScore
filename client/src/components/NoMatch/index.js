import React from "react";

function NoMatch() {
  return (
    <div className="container">
        <div className="row">

            <div className="pageTitle">
                <h1>No Match</h1>
            </div>

        </div>

        <div className="row3">
            <div className="col-12">
                <h3>There is no match for that route!</h3>
                <h4>Please try something else</h4>

            </div>
        </div>
    </div>
    );  
}

export default NoMatch;