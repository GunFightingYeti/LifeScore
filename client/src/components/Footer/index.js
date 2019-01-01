import React from "react";

function Footer(props) {
  return (
    <footer>

        <div className="container">
            <div className="row">

                <div className="col-md-12">
                    {/* <a href="https://github.com/GunFightingYeti" target="_blank" rel="noopener noreferrer"
                        className="mx-2">
                        <i className="fab fa-github"></i> Lewis Github</a> */}

                    <span className="float-center"><i className="far fa-copyright"></i> Tim Lewis 2018</span>
                </div>

            </div>
        </div>

    </footer>
    );  
}

export default Footer;