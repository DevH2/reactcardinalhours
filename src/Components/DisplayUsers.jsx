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
             //this.getTotalTime()
        }, 1000);
        
    }
    componentDidUpdate(){
    }
    async getUsers(){  
        try {
            const usersResponse = await fetch('https://hours.lren.cf/users/getusers')
            usersResponse.json().then(data => {
            this.setState({users: data})
            //console.log(data)
            console.log( data[4].totalTime)
            return data;
        })                
        } catch {
            console.log("Couldn't retrieve users")
        }        
    }
    async getTotalTime(){ 
        try{
            const usersResponse = await fetch('https://hours.lren.cf/users/getuserdata?password=987')
            usersResponse.json().then(data => {
            console.log(data + "hi")
        })
        } catch {
            console.log("Couldn't get total time for that user")
        }
    }

    render() {
        return (
            <div className={"display-users"}>
                <div>
                    {this.state.users.map(user => <User username={user.name} isSignedIn={user.signedIn} timeIn={user.timeIn} totalTime={user.totalTime}/>)}                 
                </div>
            </div>
        )
    }
}

export default DisplayUsers
