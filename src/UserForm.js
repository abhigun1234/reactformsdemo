import React, { Component } from 'react';

class UserForm extends Component {
    constructor() {
        super()
        this.onSubmitForm=this.onSubmitForm.bind(this)
        this.state = { username: '', password: '', email: '' }

    }

    onChangeUserName = (event) => {
        this.setState({ username: event.target.value })
    }
    onChangePassWord = (event) => {
        this.setState({ password: event.target.value })
    }
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    onSubmitForm=(e)=> {
        e.preventDefault()
        if(!this.state.username.includes("@"))
        {
            this.setState({nameError:"Invalid Name"})
        }
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
                        <p>{this.state.nameError}</p>
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