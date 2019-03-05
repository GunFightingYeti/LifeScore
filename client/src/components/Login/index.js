import React, { Component } from "react";
import Jumbotron from '../Jumbotron';
import { FacebookProvider, LoginButton } from 'react-facebook';

class Login extends Component {
  state = {
    user: false,
  }

  componentDidMount() {
  
  }

  handleResponse = (data) => {
    console.log(data);
  }
 
  handleError = (error) => {
    this.setState({ error });
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

                <FacebookProvider appId="1933768680045965">
                  <LoginButton
                    scope="email"
                    onCompleted={this.handleResponse}
                    onError={this.handleError}
                  >
                    <span>Login via Facebook</span>
                  </LoginButton>
                </FacebookProvider>

                <likeButton/>

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