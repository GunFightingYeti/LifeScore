import React, { Component } from "react";
import Jumbotron from '../Jumbotron';

/*global FB*/
/*global statusChangeCallback*/
/*global testAPI*/

class Login extends Component {
  state = {
    user: false,
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : "1933768680045965",
        cookie     : true,  // enable cookies to allow the server to access the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
      });
  
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
  
    };
  
    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      // #xfbml=1&version=v3.2&appId=1933768680045965&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  login = () => {
    window.fb.login(
      response => { this.statusChangeCallback(response) },
      { scope : "email.public_profile" }
      );
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  checkLoginState = () => {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  // This is called with the results from from FB.getLoginStatus().
  statusChangeCallback = (response) => {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  testAPI = () => {
    console.log('Welcome!  Fetching your information.... ');
    window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

  userTrue = () => {
    this.setState({ user: true });
    }

  userFalse = () => {
    this.setState({ user: false });
  }

  render () {
    return (
      <div>
        <Jumbotron/>
        <div className="container">

            {/* Login */}
            <div className="row justify-content-center">

              <div className="col-12 results p-4">
              
                <div className="col-12">
                   
                  {(this.state.user === true)
                    ? <div>
                      <h1 className="mb-4">Login</h1>
                      <div className="fb-login-button" data-size="large" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true" onClick={this.userTrue.bind(this)}></div>
                    </div>
                    : <div>
                      <div className="row"> <h1>You're logged in!</h1> <a href="/home" className="btn btn-lg btn-outline-success mx-4">Continue to Game</a> </div>
                      <div className="fb-login-button" data-size="large" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true" onClick={this.userFalse.bind(this)}></div>
                    </div>
                  }

                  <div id="status"></div>

                </div>
              
                <h1 className="my-4">How do I play this game?</h1>
                <h4>1. Login</h4>
                <h4>2. Browse for an achievement that looks fun *</h4>
                <h4>3. Go do awesome things and get proof</h4>
                <h4>4. Upload the proof of your achievements and let your friends confirm your awesomeness!</h4>
                <h4>5. Feel like you've achieved more in life</h4>
                <p className="mt-3">* Some achievements are for entertainment only and should not be attempted</p>
              </div>

            </div>
      </div>
    </div>
    );  
  }
}

export default Login;