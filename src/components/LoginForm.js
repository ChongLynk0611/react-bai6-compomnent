import React, {Component} from 'react'

class LoginForm extends Component{
    render(){
        return(
            <div className="LoginForm">
                <div className="input">
                    <div>UserName</div>
                    <input type="text"></input>
                </div>
                <div className="input">
                    <div>Password</div>
                    <input type="password"></input>
                </div>
                <button>sigip to Coder-X</button>
            </div>
        );
    }
}

export default LoginForm;