import React, { Component } from 'react'
import User from './User'

export class DisplayUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
       this.getUsers()
    }
    componentDidUpdate(){
        console.log(this.state.users)
    }
    async getUsers(){     
        const usersResponse = await fetch('https://hours.lren.cf/users/getusers')
        usersResponse.json().then(data => {
            this.setState({users: data})
            console.log(data)
            return data;
        })                
    }
    render() {
        return (
            <div className={"display-users"}>
                <div>
                    {
                    this.state.users.map(user => <User username={user.name} isSignedIn={user.signedIn}/>)
                    }                 
                </div>
            </div>
        )
    }
}

export default DisplayUsers
