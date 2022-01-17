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
        setDisplayedTime(parseInt(timeIn));
        console.log(formatTime( 434875.59,0))
    }, [])

    //It might be better to do this in the parent node with foreach, but I am lazy
    useEffect(() => {
        const interval:NodeJS.Timer = setInterval(() => {
            if(!signedIn) return
            setDisplayedTime(displayedTime+1)
        }, 1000)
        return ():void => clearInterval(interval)
    }, [displayedTime, signedIn])


    const formatTime = (...times:number[]):string => {
        if(!times) return "00:00:00"
        const timeInSeconds:number = Math.trunc(times[0] + (times[1] / 1000))
        const secondsLeft:number = timeInSeconds % 3600 % 60;
        const mins:number = Math.floor(timeInSeconds % 3600 / 60)
        const hrs:number = Math.floor(timeInSeconds / 3600)
        const HH:string = (hrs < 10 ? "0" : "") + hrs
        const MM:string = (mins < 10 ? "0" : "") + mins
        const SS:string = (secondsLeft < 10 ? "0" : "") + secondsLeft
        return `${HH}:${MM}:${SS}`
    }

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.name}>{name}</Typography>
            <Typography sx={styles.signedInText} color={signedIn ? "lime":"#ff073a"}>{signedIn ? "SIGNED IN": "SIGNED OUT"}</Typography>
            <Box sx={styles.timeContainer}>
                <Typography sx={styles.timeText}>Time In: {formatTime(displayedTime, parseInt(timeIn))} </Typography>
                <Typography sx={styles.timeText}>Total Time: {formatTime(0, parseInt(totalTime))}</Typography>
            </Box>
        </Box>
    )
}
export default UserCard