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
            isOpen: false
        }
        this.handleSignInOut = this.handleSignInOut.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
        this.clearInput = this.clearInput.bind(this)
        this.handleOnClose = this.handleOnClose.bind(this)
    }
    async handleSignInOut(userPassword){
        if(this.state.passwordValue.length === 0 || 
           this.state.passwordValue.split(" ").length === 0
        ){
            this.setState({isOpen: true})
            console.log(this.state.isOpen)
            return console.log("No empty passwords")
        }
        
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

    handleOnClose = () => this.setState({isOpen: false})
    
    componentDidMount(){
    }
    render() {
        return (
            <div className={"login-in-out-container"}>
                <div>Sign In/Out:</div>
                <input type={"password"} className={"input"} value={this.state.passwordValue} onChange={this.handleUserInput}  />
                <button className={"buttons"} onClick={() => {this.handleSignInOut(this.state.passwordValue)}}>Enter</button>
                <Snackbar autoHideDuration={1000} open={this.state.isOpen} 
                          onClose={this.handleOnClose} 
                >
                    <SnackbarContent message={"No empty or duplicate passwords."}/>
                </Snackbar>
            </div>
        )
    }
}

export default withStyles(styles)(SignInSignOut)
