import React, { useState } from 'react';
import './App.css';

function App() {
  const [loginType, setLoginType] = useState('user');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  const handleLoginTypeChange = (event) => {
    setLoginType(event.target.value);
  };

  const handleLoginSubmit = () => {
    // Add login functionality here
    // Example: Validate user input, send data to the server, handle server response
    alert('Login button clicked');
  };

  const handleSignupSubmit = () => {
    // Add signup functionality here
    // Example: Validate user input, send data to the server, handle server response

    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("comfirmpass").value;
    if(password !== confirmPassword)
    {
      alert("Passwords do not match!");
    }
    else{
      alert("Signup Succesfully");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form">
          <h2>Login</h2>
          <div className="radio-group">
            <label><input type="radio" name="loginType" value="user" checked={loginType === 'user'} onChange={handleLoginTypeChange} /> User</label>
            <label><input type="radio" name="loginType" value="admin" checked={loginType === 'admin'} onChange={handleLoginTypeChange} /> Admin</label>
            <label><input type="radio" name="loginType" value="client" checked={loginType === 'client'} onChange={handleLoginTypeChange} /> Client</label>
          </div>
          <input type="text" placeholder="Username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
          <button type="button" onClick={handleLoginSubmit}>Login</button>
        </form>

        <form className="form">
          <h2>Signup</h2>
          <input type="text" placeholder="Name" value={signupName} onChange={(e) => setSignupName(e.target.value)} required />
          <input type="email" placeholder="Email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
          <input type="password" id='pass' placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required />
          <input type="password" id='comfirmpass' placeholder="Confirm Password" value={signupConfirmPassword} onChange={(e) => setSignupConfirmPassword(e.target.value)} required />
          <button type="button" onClick={handleSignupSubmit}>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default App;
