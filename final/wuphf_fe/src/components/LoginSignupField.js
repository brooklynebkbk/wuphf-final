// login/signup field that is/is not visible based on current user status
//standalone component
import React, { Component } from 'react';

class LoginSignupField extends Component{
  constructor(){
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      renderButtons: false,
      renderForm: false
    };
  };



logOut(){
  console.log("logout")
  this.setState({
    renderButtons: true
  })
  console.log(this.state)
  this.pickedform()

};

chooseSignup(){
  console.log("Signup")
  this.setState({
    renderForm: true,
    renderButtons: true
  })
};

chooseLogin(){
  console.log("Login")
  this.setState({
    renderForm: true,
    renderButtons: false
  })
};

pickedform(){
  if(this.state.renderButtons && this.state.renderForm){
    return(
    <div className="box">
    <p className="special">SIGNUP</p>
    <form onSubmit={()=>this.handleSignup()}>
      <input type="text" onChange={(f)=>this.handleFirstnameInput(f)} />
      <input type="text" onChange={(l)=>this.handleLastnameInput(l)} />
      <input type="text" onChange={(e)=>this.handleEmailInput(e)} />
      <input type="password" onChange={(p)=>this.handlePasswordInput(p)} />
      <input className="button" type="submit" />
    </form>
    </div>)
  } else if(this.state.renderButtons){
    return(
      <div className="box">
      <p className="special">GET STARTED</p>
      <button onClick={()=>this.chooseLogin()}>Log in</button>
      <button onClick={()=>this.chooseSignup()}>Sign up</button>
      </div>)
  } else if(this.state.renderForm){
    return(
    <div className="box">
    <p className="special">LOGIN</p>
    <form onSubmit={()=>this.handleLogin()}>
      <input type="text" onChange={(e)=>this.handleEmailInput(e)} />
      <input type="password" onChange={(p)=>this.handlePasswordInput(p)} />
      <input className="button" type="submit" />
    </form>
    </div>)
  } else {
    return(
      <div className="box">
      <p className="special">LOGOUT</p>
      <button onClick={()=>this.logOut()}>Log out</button>
      </div>)
  }
};

handleFirstnameInput(f){
  this.setState({
    firstname:f.target.value
  })
}

handleLastnameInput(l){
  this.serState({
    lastname:l.target.value
  })
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

  handleLogin(){
    this.setState({
      renderForm: false
    })
    //compare provided email and password with email and password in the database
    //if they match, the user is signed in
  }

  handleSignup(){
    this.setState({
      renderButtons: true,
      renderForm: false
    })
    //enter provided firstname, lastname, email and password into the datanbase
    //direct the user to login
  }

  render(){
    return(<div>
      {this.pickedform()}</div>)
  }

}
export default LoginSignupField;
