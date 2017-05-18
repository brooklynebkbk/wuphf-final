// may be setup in back end
import React, { Component } from 'react';
class Email extends Component{
  constructor(){
    super();
    this.state = {
      email: ""
    }
  }

  confirmCurrentEmail(){
    //confirmed current email in the database
  }

  handleEmailInput(e){
    this.setState({
      email:e.target.value
    })
  }

  handleSubmit(e){
    // axios({
    //   method: 'post',
    //   url: 'localhost:3010',
    //   data: {
    //     email: e.target.value
    //   }
    // });
    //route here
    //update email in the database
  }

  render(){
  return(
    <div>
    <p>EMAIL</p>
    <form>
    Confirm current email address
      <input type="button" value="Confirm" onChange={()=>this.confirmCurrentEmail} />
    OR Provide alternative email
      <input type="text" onChange={()=>this.handleEmailInput} />
      <input type="submit" onChange={()=>this.handleSubmit} />
    </form>
    </div>)
  }

}
export default Email;



