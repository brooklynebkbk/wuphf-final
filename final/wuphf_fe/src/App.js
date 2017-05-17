import React, { Component } from 'react';
import './App.css';
import Welcome from "./components/Welcome.js";
import LoginSignupField from "./components/LoginSignupField.js";
import Wuphfs from "./components/Wuphfs.js";
import WuphfFriends from "./components/WuphfFriends.js";
import UserAuth from "./components/UserAuth.js";
// var Auth = require('j-toker');

class App extends Component {
  render() {
    return (
      <div>
      <div className="Wuphf">
        <h1>WUPHF</h1>
        </div>
        <Welcome />
        <LoginSignupField />
        <Wuphfs />
        <WuphfFriends />
        <UserAuth />
        <footer className="footer">A Dogpack Website</footer>
      </div>
    );
  }
}

export default App;
