import axios from 'axios';
import React, { Component } from 'react';
import UserForm from './UserForm';

class UserFormPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            email: '',
            nameError:''
        }
    }
    onChangeUserName = (event) => {
        this.setState({ name: event.target.value })
    }
    onChangePassWord = (event) => {
        this.setState({ password: event.target.value })
    }
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleSubmit = e => {
        let postData=true
        e.preventDefault()
        if(this.state.username.length<4){
            this.setState({nameError:'username should be atleast 4 char'})
            postData=false;
        }
       
        console.log(this.state)
        if(postData)
        {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
        }

        axios.post('https://justolearnapp.herokuapp.com/adduser/', this.state, { headers: headers }).then(response => {
            console.log("response", response)
        }).catch(error => {

            console.log("error", error)
        })
    }
    }
    render() {
        return (
            <div>
                <div>Register</div>
                <form onSubmit={this.handleSubmit}>

                    <label>UserName</label>
                    <input type="text" value={this.state.username} onChange={this.onChangeUserName}></input>
                    {this.state.username}
                    <p>{this.state.nameError}</p>
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

export default UserFormPost;