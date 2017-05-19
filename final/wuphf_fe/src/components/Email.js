// may be setup in back end
import React, { Component } from 'react';
import axios from 'axios';
class Email extends Component{
  constructor(){
    super();
    this.state = {
      email: "",
      provided: false
    }
  }

  confirmCurrentEmail(){
    this.setState({
      provided: true
    })
    //confirmed current email in the database
  }

  handleEmailInput(e){
    this.setState({
      email:e.target.value
    })
  }

  handleSubmit(e){
    this.setState({
      provided: true
    })
    axios({
      method: 'post',
      url: 'http://localhost:3010',
      data: {
        email: "brooklyne.finni@gmail.com"
      }
    });
    //route here
    //update email in the database
  }

emailField(){
  if(this.state.provided == true){
    return(
    <div className="box">
      <p className="special">EMAIL</p>
      <p className="special">You're good to go.</p>
    </div>)

  }else{
    return(
    <div className="box">
    <p className="special">EMAIL</p>
    <form>
    Confirm current email address
      <input className="button" type="button" value="Confirm" onChange={()=>this.confirmCurrentEmail} />
    OR Provide alternative email
      <input type="text" onChange={()=>this.handleEmailInput} />
      <input className="button" type="submit" onChange={()=>this.handleSubmit} />
    </form>
    </div>)
  }
  }


  render(){
    return(<div>
      {this.emailField()}</div>)
  }
}


export default Email;



