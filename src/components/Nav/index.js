import React from "react";
import "../../app.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        {/* <a className="navbar-brand" href="https://gunfightingyeti.github.io/Assignment3/Bootstrap%20Website/index.html" target="_blank" rel="noopener noreferrer">
        <img className="logo" src="./assets/images/apple-icon-57.png" width="50" height="50" alt="Tim Lewis Logo"/>
        </a> */}
        <a href="/"><div className="navbar-brand ml-2 title">Life Score</div></a>
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
                    <a className="nav-link font ml-2" href="/friends"><i className="fas fa-user-friends"></i> Friends</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle font ml-2" id="navbarDropdownMenuLink" href="/browse" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-journal-whills"></i> Browse</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item font" href="/browseAll">All</a>
                    <a className="dropdown-item font" href="/browseLife">Life</a>
                    <a className="dropdown-item font" href="/browseFood">Food</a>
                    <a className="dropdown-item font" href="/browseSocial">Social</a>
                    <a className="dropdown-item font" href="/browseTravel">Travel</a>
                    <a className="dropdown-item font" href="/browseViolent">Violent</a>
                    <a className="dropdown-item font" href="/saved">Saved</a>
                    </div>
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

export default Nav;