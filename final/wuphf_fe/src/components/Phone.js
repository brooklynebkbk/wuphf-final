import React, { Component } from 'react';

class Phone extends Component{
  constructor(){
    super();
    this.state = {
      phone: ""
    }
  }

  handlePhoneInput(n){
    this.setState({
      email:n.target.value
    })
  }

  handleSubmit(){
  // store provided telephone number in database
  }

  render(){
  return(
    <div>
    <p>PHONE</p>
    <form>
      <input type="text" onChange={()=>this.handlePhoneInput} />
      <input type="submit" onChange={()=>this.handleSubmit} />
    </form>
    </div>)
  }

}

export default Phone;
