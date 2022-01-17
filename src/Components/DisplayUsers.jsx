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
        }, 1000);
        //this.getUsers()
    }
    async getUsers(){  
        try {
            const usersResponse = await fetch('https://hours.team4159.org/users/getusers')
            usersResponse.json().then(data => {
                this.setState({users: data})
                return data;
            })                
        } catch {
            console.log("Couldn't retrieve users") //turn into snackbar later
        }        
    }
    render() {
        const filteredUsers = this.state.users.filter(user => user.name.toLowerCase().includes(this.props.searchText.toLowerCase())).sort((user1, user2) => {return user2.timeIn-user1.timeIn}).sort(user => {
            return user.signedIn===1 ? -1:1
        })
        return (
            <div className={"display-users"}>
                <div>
                    {filteredUsers.map(user=> {if(this.state.users.length !== 0) return <User key={user.name} username={user.name} isSignedIn={user.signedIn} timeIn={user.timeIn} totalTime={user.totalTime}/>})}              
                </div>
            </div>
        )
    }
}

export default DisplayUsers
