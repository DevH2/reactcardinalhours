import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type UserCardProps = {
    name:string;
    timeIn:string;
    totalTime:string;
    signedIn:boolean;
}
const styles = {
    container:{
        display:"flex",
        backgroundColor:"#212121",
        flexDirection:"column",
        padding:"1em",
        margin:"1.5em",
        borderRadius:"10px"
    },
    name: {
        color:"whitesmoke",
        fontWeight:"bold"
    },
    signedInText: {
        padding:".5em 0 .5em 0"
    },
    timeText: {
        color:"#7f7f7f",
        margin:"0 2em 0 0"

    },
    timeContainer: {
        display:"flex",
        flexDirection:"row"
    }
}
const UserCard = (props:UserCardProps):JSX.Element => {
    const [displayedTime, setDisplayedTime]: [number, Dispatch<SetStateAction<number>>] = useState(0)
    const {name, timeIn, totalTime, signedIn} = props
    
    useEffect(() => {
        //console.log(displayedTime)
    }, [])

    //It might be better to do this in the parent node with foreach, but I am lazy
    useEffect(() => {
        const interval:NodeJS.Timer = setInterval(() => {
            if(!signedIn) return
            setDisplayedTime(displayedTime+1)
        }, 1000)
        return ():void => clearInterval(interval)
    }, [displayedTime, signedIn])


    const formatTime = (timeInSec:number):string => {
        let secondsLeft = timeInSec % 3600 % 60;
        let mins = (Math.floor(timeInSec % 3600/60));
        let hrs = Math.floor(timeInSec/3600);
        let HH = (hrs < 10 ? "0" : "") + hrs;
        let MM = (mins <10 ? "0":"") + mins;
        let SS = (secondsLeft < 10 ? "0":"") + Math.floor(secondsLeft);
        return HH+":"+MM+":"+SS;
    }

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.name}>{name}</Typography>
            <Typography sx={styles.signedInText} color={signedIn ? "lime":"#ff073a"}>{signedIn ? "SIGNED IN": "SIGNED OUT"}</Typography>
            <Box sx={styles.timeContainer}>
                <Typography sx={styles.timeText}>Time In: {formatTime(parseInt(timeIn)/1000 + displayedTime)} </Typography>
                <Typography sx={styles.timeText}>Total Time: {formatTime(parseInt(totalTime)/1000)}</Typography>
            </Box>
        </Box>
    )
}
export default UserCard