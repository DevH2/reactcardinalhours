import React, { Component } from 'react'
import User from './User'

export class DisplayUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            updater: false
        }
    }
    componentDidMount(){
         setInterval(() => {
             this.getUsers()
             this.getTotalTime()
        }, 1000);
        
    }
    componentDidUpdate(){
    }
    async getUsers(){  
        try {
            const usersResponse = await fetch('https://hours.lren.cf/users/getusers?=bob')
            usersResponse.json().then(data => {
            this.setState({users: data})
            console.log(data)
            return data;
        })                
        } catch {
            console.log("Couldn't retrieve users")
        }        
    }
    async getTotalTime(){ 
        const usersResponse = await fetch('https://hours.lren.cf/users/getuserdata')
        usersResponse.json().then(data => {
            console.log(data + "hi")
        })
    }

    render() {
        return (
            <div className={"display-users"}>
                <div>
                    {
                    this.state.users.map(user => <User username={user.name} isSignedIn={user.signedIn} timeIn={user.timeIn}/>)
                    }                 
                </div>
            </div>
        )
    }
}

export default DisplayUsers
