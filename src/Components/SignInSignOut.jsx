import React, { Component } from 'react'
import { Snackbar, SnackbarContent, withStyles} from '@material-ui/core'
const styles = theme => ({
    snackBar: {
        marginTop: '10%',
    }
})
class SignInSignOut extends Component {
    constructor(props){
        super(props)
        this.state = {
            passwordValue:"",
        }
        this.handleSignInOut = this.handleSignInOut.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }
    async handleSignInOut(userPassword){
        if(!this.state.passwordValue.length || 
           !this.state.passwordValue.split(" ")
        )
            return this.props.handleOpen()
        
        const user = await fetch(`https://hours.lren.cf/users/getuserdata?password=${userPassword}`, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })      
        user.json().then(data => {
            if(data.signedIn === 1){
                fetch('https://hours.lren.cf/users/signout', {
                    method: 'POST',
                    headers: {
                       'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({password:userPassword})
                })
                console.log(`Signed out ${data.name}`)
            } else {
                fetch('https://hours.lren.cf/users/signin', {
                    method: 'POST',
                    headers: {
                       'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({password:userPassword})
                })
                console.log(`Signed in ${data.name}`)
            }
        })
        this.clearInput()
    }

    
    handleUserInput = event => this.setState({passwordValue: event.target.value})
    clearInput = () => this.setState({passwordValue:""})

    
    componentDidMount(){
    }
    handleUserKeypress = event => {
        if (event.key === 'Enter') {
            this.handleSignInOut(this.state.passwordValue);
        }
    }
    render() {
        return (
            <div className={"login-in-out-container"}>
                <div>Sign In/Out:</div>
                <input type={"password"} className={"input"} value={this.state.passwordValue} onChange={this.handleUserInput} onKeyPress={this.handleUserKeypress} />
                <button className={"buttons"} onClick={() => {this.handleSignInOut(this.state.passwordValue)}}>Enter</button>
            </div>
        )
    }
}

export default withStyles(styles)(SignInSignOut)
