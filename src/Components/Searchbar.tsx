//import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, CSSProperties, useState } from 'react';

const styles = {
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        height:"2em",
    } as CSSProperties,
    searchIcon: {
        borderWidth:"0",
        backgroundColor:"white",
        borderRadius:"16px 0 0 16px"
    },
    input: {
        backgroundColor:"white",
        borderWidth:"0",
        outline:"none",
        borderRadius:"16px",
        width:"50%",
        //borderRadius:" 0 16px 16px 0",
        fontSize:"18px"
    },
}
const Searchbar = () => {
    const [text, setText] = useState<string>("")
    return (
        <div style={styles.container}>
            {/*<div style={styles.searchIcon}><SearchIcon/></div>*/}
            <input placeholder=" Search user" onChange={(event:ChangeEvent<HTMLInputElement>) => setText(event.target.value)} style={styles.input}/>
        </div>
    )
}
export default Searchbar