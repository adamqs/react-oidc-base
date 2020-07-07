import React from 'react';
import logo from '../logo.svg';
import LoginButton from '../login/LoginButton';

export default () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Make this work with Cirqa Identity</p>
      <LoginButton />
    </header>
  </div>
);
