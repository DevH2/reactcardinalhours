import React, { Component } from 'react'
import { Card, CardContent, withStyles, Typography } from '@material-ui/core';

//MaterialUI styles
const styles = theme => ({
    card: {
        borderRadius:"16px;",
        boxShadow: `6px 6px 8px 0 rgba(0, 0, 0, 0.25),
        -4px -4px 6px 0 rgba(75, 75, 75, 0.3);`,
        backgroundColor: `#18191a`,
        background: `linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(2,2,2,0.25));`,
        display:'flex',
        flexDirection:'row'
    },
    signInText: {
        color: '#03ac13',
        fontFamily: `"Lucida Console", "Courier New", monospace`
    },
    signOutText: {
        color: 'red',
        fontFamily: `"Lucida Console", "Courier New", monospace`
    },
    text: {
        color:'whitesmoke',
        position:'relative'
    },
    time: {
        position:'absolute',
        left:'50%',
    },
    timeContainer: {
        display:'flex',
        flexDirection:'column'
    }, 
    topText: {
        marginBottom:'1em'
    },
    bottomText: {
        transform:'translate(0,2.5em)'
    }


})
class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            //Putting ajax call props in state var will need the use of componentWillReceiveProps() so no
            
        }
    }
    getTime(){
        const {timeIn} = this.props //Time in milliseconds
        if(!timeIn) return "00:00:00"
        return new Date(timeIn).toISOString().substr(11,8)
    }
    getTotalTime(){
        const {totalTime} = this.props
        if(!totalTime) return "00:00:00"
        const formattedTime = new Date(totalTime).toISOString()
        return `${(parseInt(formattedTime.substr(8,2))-1)*24+parseInt(formattedTime.substr(11,2))}:${formattedTime.substr(14,5)}`
    }
    
    componentDidMount(){
        
    }
    
    render() {
        const {classes, isSignedIn, username, totalTime} = this.props
        const signInStyles = isSignedIn === 1 ? classes.signInText : classes.signOutText;
        const signedInOutText = isSignedIn === 1 ? "IN" : "OUT"
        
        return (
            <div className={"user-container"}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={`${classes.text} ${classes.topText}`}>{username}</Typography>
                        <Typography className={`${signInStyles}`}>SIGNED {signedInOutText}</Typography>
                    </CardContent>
                    <CardContent className={classes.timeContainer}>
                        <Typography className={`${classes.text} ${classes.time} ${classes.topText}`}>Time In: {this.getTime()} </Typography>
                        <Typography className={`${classes.text} ${classes.time} ${classes.bottomText}`}>
                            Total Time: {this.getTotalTime()} 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(User)