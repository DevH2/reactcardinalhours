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
    },
    time: {
        position:'relative',
        left:'100%',
    },
    timeContainer: {
        display:'flex',
        flexDirection:'column'
    }, 
    topText: {
        marginBottom:'1em'
    }


})
class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            //Putting ajax call props in state var will need the use of componentWillReceiveProps() so no
            timeInSeconds: 0,
        }
        this.setTimeSync = this.setTimeSync.bind(this)
    }
    showTime(){
        const {timeIn} = this.props //Time in milliseconds
        return new Date(timeIn).toISOString().substr(11,8)
    }
    showTotalTime(){
        const {totalTime} = this.props
        if(!totalTime) return "00:00:00"
        return new Date(totalTime).toISOString().substr(11,8)
    }
    
    setTimeSync = () => this.setState({timeInSeconds: this.state.timeInSeconds+1})
    formatTime = (time) => { return new Date(time*1000).toISOString.substr(11,8)}
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
                        <Typography className={`${classes.text} ${classes.time} ${classes.topText}`}>Time In: {this.showTime()} </Typography>
                        <Typography className={`${classes.text} ${classes.time}`}>
                            Total Time: {this.showTotalTime()} 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(User)