import React from "react";
import "./Register.css";
import BeforeAuthTemplate from "../Templates/BeforeAuthTemplate";

function Register() {
  return (
    <div>
      <div className="register-container">
        <h1>Sign up for an account</h1>
        <form>
          <div className="form-group">
            <div className="name-inputs">
              <div className="input-fields1">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                />
              </div>

              <div className="input-fields2">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Choose a password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
