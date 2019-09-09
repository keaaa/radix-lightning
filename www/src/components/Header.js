import React from 'react';
import logo from './logo.svg';

const Header = () => {
  return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Welcome to Radix lightning talk
      <br/>
      <br/>
      Omnia Radix is a Platform-as-a-Service. 
      <br/>
      <br/>
      It builds, deploys, host and monitors applications, letting developers focus on code and features.
    </p>
  </header>
}

export default Header;