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

                    <a href="/home"><span className="float-left white-text"><i className="fas fa-unlock-alt"></i></span></a>
                    <a href="https://github.com/GunFightingYeti/LifeScore" target="_blank" rel="noopener noreferrer" className="white-text"><span className="float-center"><i className="far fa-copyright"></i> Tim Lewis 2018</span></a>
                    <a href="https://termsfeed.com/privacy-policy/d7476db7770074eabb5e98ee202c62ae" target="_blank" rel="noopener noreferrer" className="white-text"><span className="float-right">Privacy Policy</span></a>
                </div>

            </div>
        </div>

    </footer>
    );  
}

export default Footer;