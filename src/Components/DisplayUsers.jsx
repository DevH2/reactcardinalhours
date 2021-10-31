import React, { Component, useState } from 'react'
import User from './User'

export class DisplayUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: [],
            updater: false,
            current_time: Date.now(),
        }
        // eventBus.on("toggleSignIn", this.setUserData)
    }
    componentDidMount(){
        setInterval(() => {
              this.setState({current_time: Date.now()});
        }, 1000);
        this.setUserData()

        this.setUserData = this.setUserData.bind(this);
        //this.getUsers()
    }
    async setUserData(){
        try {
            const usersResponse = await fetch('https://hours.lren.cf/users/getusers')
            const t = usersResponse.json().then(data => {
                this.setState({userData: data})
            })        
        } catch {
            console.log("Couldn't retrieve users") //turn into snackbar later
            return [];
        }        
    }
    render() {
        // if (this.state.userData.length === 0) {
        //     return null; //just make it empty to 
        // }
        const filteredUsers = this.state.userData.filter(user => user.name.toLowerCase().includes(this.props.searchText.toLowerCase())).sort((user1, user2) => {return user2.timeIn-user1.timeIn}).sort(user => {
            return user.signedIn===1 ? -1:1
        })
        return (
            <div className={"display-users"}>
                <div>
                    {filteredUsers.map(user=> {if(this.state.userData.length !== 0) return <User key={user.name} username={user.name} isSignedIn={user.signedIn} timeIn={(user.signedIn) ? this.state.current_time - user.timeIn : 0} totalTime={user.totalTime}/>})}
                </div>
            </div>
        )
    }
}

export default DisplayUsers
