import React from "react";
import "../../app.css";

function Login(props) {
  return (
    <div className="container">
        <h1>Login</h1>

        <form class="needs-validation" novalidate>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                <div class="invalid-feedback">
                    Please provide a valid Email address.
                </div>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                <div class="invalid-feedback">
                    Please provide a valid password.
                </div>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
            </div>

            <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
    );  
}

export default Login;