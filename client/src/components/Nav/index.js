import React, { Component } from "react";
// import API from "../../utils/API";

class Nav extends Component {

  state = {

  }

  render () {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/"><div className="navbar-brand ml-2 title">LifeScore</div></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active ml-2">
                  <a className="nav-link font" href="/"><i className="fas fa-home"></i> Home</a>
              </li>
              <li className="nav-item">
              <a className="nav-link font ml-2" href="/browse"><i className="fas fa-journal-whills"></i> Browse</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link font ml-2" href="/friends"><i className="fas fa-user-friends"></i> Friends</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link font ml-2" href="/player"><i className="fas fa-user"></i> Me</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link font ml-2" href="/login"><i className="fas fa-sign-out-alt"></i> Logout</a>
              </li>
            </ul>
        </div>
      </nav>
      );  
  }
}


export default Nav;