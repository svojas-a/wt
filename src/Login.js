import React, { useState } from 'react';
import BackgroundImage from './BackgroundImage'; // Use image background
import './Login.css';

function Login() {
  const [loginType, setLoginType] = useState("mobile");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  return (
    <div className="login-page">
      <BackgroundImage /> {/* Full-page background image */}
      <div className="login-container">
        <h2 className="login-title">Already a member? Login</h2>
        <div className="login-tabs">
          <button
            className={`login-tab ${loginType === "mobile" ? "active" : ""}`}
            onClick={() => handleLoginTypeChange("mobile")}
          >
            Mobile Number
          </button>
          <button
            className={`login-tab ${loginType === "email" ? "active" : ""}`}
            onClick={() => handleLoginTypeChange("email")}
          >
            Email Address
          </button>
          <button
            className={`login-tab ${loginType === "membership" ? "active" : ""}`}
            onClick={() => handleLoginTypeChange("membership")}
          >
            Membership Number
          </button>
        </div>
        <div className="login-input">
          {loginType === "mobile" && (
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="input-field"
            />
          )}
          {loginType === "email" && (
            <input
              type="email"
              placeholder="Enter your email address"
              className="input-field"
            />
          )}
          {loginType === "membership" && (
            <input
              type="text"
              placeholder="Enter your membership number"
              className="input-field"
            />
          )}
        </div>
        <div className="login-terms">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
          <label>
            By continuing you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
          </label>
        </div>
        <button className="login-button">Continue</button>
      </div>
    </div>
  );
}

export default Login;
