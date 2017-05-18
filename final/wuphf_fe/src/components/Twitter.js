import React, { Component } from 'react';

class Twitter extends Component{
  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleEmailInput(e){
    this.setState({
      email:e.target.value
    })
  }

  handlePasswordInput(p){
    this.setState({
      password:p.target.value
    })
  }

  handleSubmit(){
    //send email amd password to twitter url to be authorized
    //either user isnt authorized
    //or they are authorized and I parse through the json object that is returned for the client id
    //store the id in the database
  }

  render(){
  return(
    <div>
    <p>TWITTER</p>
    <form>
      <input type="text" onChange={()=>this.handleEmailInput} />
      <input type="text" onChange={()=>this.handlePasswordInput} />
      <input type="submit" onChange={()=>this.handleSubmit} />
    </form>
    </div>)
  }

}

export default Twitter;
