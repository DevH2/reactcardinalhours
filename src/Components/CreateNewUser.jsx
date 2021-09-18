import React, { Component } from 'react'
import User from './User'

export class CreateNewUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            type:"password",
            passwordValue: "",
            usernameValue: ""
        }
        this.clearInputs = this.clearInputs.bind(this)
        this.handleUsernameInput = this.handleUsernameInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
        this.handleAddUser = this.handleAddUser.bind(this)
    }
    componentDidMount(){
        
    }
    clearInputs(){
        this.setState({usernameValue:""})
        this.setState({passwordValue:""})
        console.log("cleared input")
    }
    handleAddUser(){
        const {usernameValue, passwordValue} = this.state
        if(
            usernameValue.split(" ").length === 0 || passwordValue.split(" ").length === 0 ||
            usernameValue.length === 0 || passwordValue.length === 0
        ){
            this.clearInputs()
            return this.props.createUserHandleOnOpen()
        } 
        this.addUser(usernameValue, passwordValue)
        this.clearInputs()
    }
    handleUsernameInput = event => this.setState({usernameValue:event.target.value})
    handlePasswordInput = event => this.setState({passwordValue:event.target.value})
    
    
    async addUser(name, pass){
        const resObj = await fetch('https://hours.lren.cf/users/adduser', {
            method:'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: name, password:pass})
        })
        .then(res => console.log(res))
        .catch(err => {
            return console.log(err)
        })
        console.log(`Added ${name}`)
    }
    render() {
        const {usernameValue, passwordValue} = this.state
        return (
            <div className={"create-user-container"}>
                <div>Create Username:</div>
                <input className={"input"} value={usernameValue} onChange={this.handleUsernameInput}/>
                <div>Create Password:</div>
                <input type={this.state.type} className={"input"} value={passwordValue} onChange={this.handlePasswordInput}/>
                <button className={"buttons"} onClick={this.handleAddUser}>Add New User</button>
            </div>
        )
    }

}


export default CreateNewUser