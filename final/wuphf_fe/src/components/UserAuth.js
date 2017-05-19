
// ***email_auth to happen on back end? email provided upon registration. Use action mailer?? probably
// ***phone_auth will update database and use twilio to send text and call??? update Users table???
import React, { Component } from 'react';

import Email from './Email.js';
import Phone from "./Phone.js";
import Facebook from "./Facebook.js";
import Instagram from "./Instagram.js";
import Slack from "./Slack.js";
import Twitter from "./Twitter.js";
import UserLocation from "./UserLocation.js";

function UserAuth(props){
  console.log("userAuth");

  return(
    <div className="main"><p className="superSpecial">USERAUTH</p>
    <Email />
    <Phone />
    <Facebook />
    <Instagram />
    <Slack />
    <Twitter />
    <UserLocation />
    </div>)

}
export default UserAuth;
