import React, { Component } from 'react';

 class PostForm extends Component {
    constructor(props){
        super(props)
        this.state={userId:'',
                title:'',
                body:''
            }
    }
    changeHandler=(e)=>{
     this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=(e)=>{
         e.preventDefault()
         console.log(this.state)
       }
    submitHandler
    render() {
        const{userId,title,body}
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='' name="userid" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type='' name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type='' name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit"></button>
                </form>
                
            </div>
        );
    }
}

export default PostForm;