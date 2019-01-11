import React from "react";
import Jumbotron from '../Jumbotron';

function Login(props) {
  return (
      <div>
        <Jumbotron/>
        <div className="container">

          <div className="row justify-content-center">

            {/* Login */}
              <div className="col-6">
              <h1>Login</h1>

              <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true"></div>

                <form className="needs-validation" noValidate>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      <div className="invalid-feedback">
                          Please provide a valid Email address.
                      </div>
                  </div>
                  <div className="form-group">
                      <label htmlFor="Password">Password</label>
                      <input type="password" className="form-control" id="Password" placeholder="Password" required/>
                      <div className="invalid-feedback">
                          Please provide a valid password.
                      </div>
                  </div>
                  <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                      <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                  </div>

                  <a href="/" className="login btn btn-success mt-3 ml-2" id="login">Login</a>
                  </form>
                </div>

                {/* Create New */}
                <div className="col-6">
                  <h1>Create New Profile</h1>

                  <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>

                  <a href="/create" className="login btn btn-success mt-3 ml-5" id="login">New Profile</a>
                </div>
            </div>
        </div>
    </div>
    );  
}

export default Login;