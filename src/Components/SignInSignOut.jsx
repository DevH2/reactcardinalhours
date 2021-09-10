import React, { Component } from 'react'
import axios from 'axios'
class SignInSignOut extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleSignInOut = this.handleSignInOut.bind(this)
    }
    async handleSignInOut(userPassword){
        // axios.post('http://hours.lren.cf/users/signin', {"password": 'bob'})
        // .then((res)=> {
        //     console.log(res.data)
        // })
        // .catch((err) => console.log(err))
        // .finally(() => console.log("executed")) //id name signedIn timeIn totalTime; usersname password  
                   
    }
    componentDidMount(){
        this.handleSignInOut();
    }
    render() {
        return (
            <div className={"login-in-out-container"}>
                <div>Sign In/Out:</div>
                <input type={"password"} className={"input"}/>
                <button className={"buttons"} onClick={this.handleSignInOut}>Enter</button>
            </div>
        )
    }
}

export default SignInSignOut
