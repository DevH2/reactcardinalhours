import { Button, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, FocusEvent, useState } from 'react'
import AdminDialog from './Notifications/AdminDialog'
import CustomTextField from './CustomTextField'

const styles = {
    container: {
        display:"flex",
        flexDirection:"column",
        backgroundColor:"whitesmoke",
        padding:"3em 4em 3em 4em",
        transform:"translate(0,20%)",
        borderRadius:"10px",
        boxShadow: "0 0 5px 5px #0f0c08"
    },
    button: {
        '&:hover': {
            background: 'rgba(255,7,58,0.9)',
        },
        color:"whitesmoke",
        backgroundColor:"#ff073a"
    },
    checkBox: {
        padding:".5em 0 .5em 0",
        color:"#595959"
    },
    enterSettingsText: {
        textAlign:"center",
        padding:"0 0 1em 0",
        color:"#595959",
        fontWeight:"bold",
        fontSize:"18px"
    },
    textField: {
        marginBottom:"1em"
    },
}
const SettingsBox = ():JSX.Element => {
    const [isShowAdminPass, setIsShowAdminPass] = useState<boolean>(true)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [currentKey, setCurrentKey] = useState<string>("Enter")

    const checkBox:JSX.Element = <Checkbox style={{color:"#ff073a"}} onChange={(event:ChangeEvent<HTMLInputElement>, checked:boolean):void => (setIsShowAdminPass(checked))}/>
    const handleOnFocus = (event:FocusEvent<HTMLInputElement>):void => setIsFocused(true)
    const handleKeyDown = (e:React.KeyboardEvent<HTMLDivElement>) => {if(isFocused) setCurrentKey(e.key)}
    const handleOnBlur = (event:FocusEvent<HTMLInputElement>):void => setIsFocused(false)
    
    


    return (
        <Paper sx={styles.container}>
            <Typography sx={styles.enterSettingsText}>Configure Controls</Typography>
            <CustomTextField label="Press a Key" value={currentKey} onKeyDown={(e:React.KeyboardEvent<HTMLDivElement>) => handleKeyDown(e)} onBlur={(e:FocusEvent<HTMLInputElement>) => handleOnBlur(e)} onFocus={(e:FocusEvent<HTMLInputElement>) => handleOnFocus(e)} sx={styles.textField} InputProps={{readOnly:true}}/>
            <CustomTextField sx={styles.textField} type={isShowAdminPass ? "password":"text"} label="Change Admin Password"/>
            <FormGroup sx={styles.checkBox}>
                <FormControlLabel label="Show Password" control={checkBox}/>
            </FormGroup>
            <Button sx={styles.button} variant="contained" size="large">
                <Typography>Submit</Typography>
            </Button>
            <AdminDialog isOpen={true}/>
        </Paper>
    )
}

export default SettingsBox
