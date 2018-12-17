import React from "react";
import "../../app.css";

function Footer(props) {
  return (
    <footer>

        <div className="container">
            <div className="row">

                <div className="col-md-12">
                    {/* <a href="https://github.com/GunFightingYeti" target="_blank" rel="noopener noreferrer"
                        className="mx-2">
                        <i className="fab fa-github"></i> Lewis Github</a> */}

                    <span className="float-center">&copy;  Velocibark 2018 - Tim Lewis and Robert Anderson</span>
                </div>

            </div>
        </div>

    </footer>
    );  
}

export default Footer;