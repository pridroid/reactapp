import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    
    <div className="tidycal-login-container">
      <div className="tidycal-login-form-container">
        <h1 className="tidycal-login-heading">Login </h1>
        <hr className="tidycal-horizontal-line" />
        <form className="tidycal-login-form" onSubmit={handleSubmit}>
         <label className="tidycal-label-login"> Your email: </label> 
         <input
            className="tidycal-login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> <br></br>
          <label className="tidycal-label-login">Your password:</label>
          <input
            className="tidycal-login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />  <br></br>
          <div className="tidycal-login-checkbox-container">
 <input
    className="tidycal-login-checkbox"
    type="checkbox"
    id="rememberMe"
    name="rememberMe"
  />
  <label htmlFor="rememberMe" style={{color:'black'}}>Remember Me</label>
</div>
         <br></br>
          <button onClick={() => loginWithRedirect()}>Log In</button>;
        </form>
        <hr className="tidycal-horizontal-line" />
       
        <button className="tidycal-login-google-button">
          Login with Google
        </button>

        <div className="tidycal-login-links">
        <p className="tidycal-login-forgot-password-link">
            Forgot your password? <Link to="/forgot-password">Reset it</Link>
          </p>
          <p className="tidycal-login-signup-link">
            Not registered? <Link to="/signup">Sign up</Link>
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Login;