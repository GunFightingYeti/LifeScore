import React from "react";
import Jumbotron from '../Jumbotron';

function Login(props) {
  return (
      <div>
        <Jumbotron/>
        <div className="container">

          <div className="row justify-content-center">

            {/* Login */}
            <div className="col-12 justify-content-center">
              <h1 className="mb-4">Login</h1>

              <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>

              <div className="results p-4 mt-5">
                <h1 className="my-4">How do I play this game?</h1>
                <h4>1. Make a profile and login</h4>
                <h4>2. Browse for an achievement that looks like fun or that you have already completed</h4>
                <h4>3. Go do awesome things and get proof</h4>
                <h4>4. Upload the proof of your achievements and let your friends confirm your awesomeness!</h4>
                <h4>5. Feel like you've achieved more in life</h4>
              </div>

            </div>
          </div>
      </div>
    </div>
    );  
}

export default Login;