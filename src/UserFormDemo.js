import React, { Component } from 'react';
import axios from 'axios';

class UserFormDemo extends Component {

    constructor(){
         super()
         this.state={username:'',passsword:'',email:''}
    }
    
    userNameChange = (event) => {
        console.log(event.target.value)

        this.setState({ username: event.target.value })
    }
    passswordChange = (event) => {
        console.log(event.target.value)
        this.setState({ passsword: event.target.value })
    }
    emailChange = (event) => {
        console.log(event.target.value)
        this.setState({ email: event.target.value })
    }

    userFormSubmit=(e)=>{
        e.preventDefault()
        console.log('state',this.state)
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
    render() {
        
        return (
            <div class="container">
                <form onSubmit={this.userFormSubmit}>
                <div className="form-group form-row">
                    <label className="col-lg-4 col-form-label" htmlFor="username">
                        User Name
                </label>
                    <div className="col-lg-8">
                        <input  onChange={this.userNameChange}
                            type="text"
                            id="username"
                            className="form-control"

                        />
                    </div>

                    <label className="col-lg-4 col-form-label" htmlFor="password">
                        Password
                    </label>
                    <div className="col-lg-8">
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            onChange={this.passswordChange}
                        />
                    </div>

                    <label className="col-lg-4 col-form-label" htmlFor="email">
                        Email
                    </label>
                    <div className="col-lg-8">
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            onChange={this.emailChange}
                         />
                    </div>

                </div>
                <button class="btn btn-primary">Register</button>
                </form>
            </div>
        );
    }
}

export default UserFormDemo;