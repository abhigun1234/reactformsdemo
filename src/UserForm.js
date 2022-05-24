import React, { Component } from 'react';

class UserForm extends Component {
    constructor() {
        super()
        this.onSubmitForm=this.onSubmitForm.bind(this)
        this.state = { username: '', password: '', email: '' }

    }

    onChangeUserName = (event) => {
        console.log("event",event)
        console.log("val",event.target.value)
        this.setState({ username: event.target.value })
    }
    onChangePassWord = (event) => {
        console.log("val",event.target.value)
        this.setState({ password: event.target.value })
    }
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    onSubmitForm=(e)=> {
        e.preventDefault()
      
       console.log("state",this.state)
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>

                    <label>UserName</label>
                    <input type="text" value={this.state.username} onChange={
                        this.onChangeUserName
                        }></input>
                       
                    {this.state.username}
                    <label>Password</label>
                    <input type="text" value={this.state.password} onChange={this.onChangePassWord}></input>
                    {this.state.password}
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.onChangeEmail}></input>
                    {this.state.email}
                    <button className="btn btn-primary">Register</button>
                </form>
            </div>
        );
    } 
}

export default UserForm;