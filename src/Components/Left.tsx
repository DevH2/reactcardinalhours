import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { CSSProperties, useContext, useEffect, useState } from "react"
import { UsersContext } from "./DesktopComponent"
import Searchbar from "./Searchbar"
import UserCard from "./UserCard"
type LeftProps = {}
type User = { 
    name: string; 
    signedIn: boolean; 
    timeIn: string; 
    totalTime: string;
}

const styles = {
    left:{
        backgroundColor:"#0f0c08",
        flex:1,
        height:"100vh",
        overflowY:"scroll"
    },
    title:{
        color:"whitesmoke",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:"24px",
        padding:"1rem 0 1rem 0"
    }
} 
const Left = (props:LeftProps):JSX.Element => {
    const getDate = ():string => {
        const date:Date = new Date()
        return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
    }
    const [date, setDate] = useState<string>();
    const [users, setUsers] = useContext(UsersContext)
    const [searchBarInput, setSearchBarInput] = useState<string>("")
    useEffect(() => {
        setDate(getDate())
        
    }, [])
    
    
    return (
        <Box sx={styles.left}>
            <Typography sx={styles.title}>Users {date}</Typography>
            <Searchbar/>
            <div>
                {users.map((u:User) => <UserCard name={u.name} signedIn={u.signedIn} timeIn={u.timeIn} totalTime={u.totalTime}/>)}
            </div>
        </Box>
    )
}

export default Left;