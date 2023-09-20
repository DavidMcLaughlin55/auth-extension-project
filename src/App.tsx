import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h2>Sign In</h2>
      <form>
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" placeholder="required"></input>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="required"></input>
        <button className="button" type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default App;
