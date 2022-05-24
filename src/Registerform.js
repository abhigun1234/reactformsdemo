
import React, { Component } from 'react'

export default class Registerform extends Component {
    constructor(){
        super()
        this.state={userName:'ram',password:'',email:'',country:''}
    }
    
    
    getUserName = (event) => {
        console.log("value",event.target.value)
        this.setState({userName:event.target.value})
    }
    getPassword=(event)=>{
        console.log("value",event.target.value)
        this.setState({password:event.target.value})
    }
    getCountry=(event)=>{
        console.log("value",event.target.value)
        this.setState({country:event.target.value})
    }
    
    getEmail=(event)=>{
        console.log("value",event.target.value)
        this.setState({email:event.target.value})
    }
    registerUser=(event)=>{
        event.preventDefault()
        console.log("data",this.state)

    }
  render() {
    return (
        <form onSubmit={this.registerUser}>
        <div className='formsr'>
        <label>UserName</label>
        <input onChange={this.getUserName}  value={this.state.userName} type="text"  ></input>
        
       
        <label>Password</label>
        <input onChange={this.getPassword} value={this.state.password} type="text" ></input>
        
        <label>Email</label>
        <input onChange={this.getEmail}  value={this.state.email} type="text"  ></input>
        <div>
      <label>
        Country
        <select value={this.state.country} onChange={this.getCountry}>
          <option value="india">india</option>
          <option value="china">china</option>
          <option value="bangladesh">bangladesh</option>
        </select>
      </label>

      
    </div>
        <button  className="btn btn-primary">Register</button>
        </div>
</form>
    )
  }
}
