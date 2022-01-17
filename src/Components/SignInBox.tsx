import { LoadingButton } from '@mui/lab'
import { Button, Checkbox, FormControlLabel, FormGroup, Paper, Snackbar, styled, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import CustomTextField from './CustomTextField'

const styles = {
    container: {
        display:"flex",
        flexDirection:"column",
        backgroundColor:"whitesmoke",
        padding:"6em 4em 6em 4em",
        transform:"translate(0,20%)",
        borderRadius:"10px",
        boxShadow: "0 0 5px 5px #0f0c08"
    },
    button: {
       backgroundColor:"#ff073a",
       '&:hover': {
            background: 'rgba(255,7,58,0.9)',
        },
    },
    enterPassText: {
        textAlign:"center",
        padding:"0 0 1em 0",
        color:"#595959",
        fontWeight:"bold",
        fontSize:"18px"
    },
    checkBox: {
        padding:".5em 0 .5em 0",
        color:"#595959",

    },

}

type SignInBoxProps = {
    handleSnackbarOpen: (msg:string) => void;
}
const SignInBox = (props:SignInBoxProps):JSX.Element => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(true)
    const [passwordText, setPasswordText] = useState<string>("")

    const checkBox:JSX.Element = <Checkbox style={{color:"#ff073a"}} onChange={(event:ChangeEvent<HTMLInputElement>, checked:boolean):void => (setIsShowPassword(checked))}/>

    const handleSignIn = (password:string):void => {
        if(!passwordText.trim()) return props.handleSnackbarOpen("Please enter a non-empty password")
        props.handleSnackbarOpen("s")
    }
    
    return (
        <Paper sx={styles.container}>
            <Typography sx={styles.enterPassText}>Enter Your Password</Typography>
            <CustomTextField 
                label="Password" 
                type={isShowPassword ? "password":"text"} 
                onChange={(e:ChangeEvent<HTMLInputElement>) => setPasswordText(e.currentTarget.value)}
                onKeyDown={(e:React.KeyboardEvent<HTMLDivElement>) => {
                    if(e.key === "Enter") handleSignIn("")
                }}
            />
            <FormGroup sx={styles.checkBox}>
                <FormControlLabel label="Show Password" control={checkBox}/>
            </FormGroup>
            {/*Need to use arrow func this time b/c of the enter key?*/}
            <LoadingButton onClick={() => handleSignIn("")} size="large" sx={styles.button} variant="contained">
                <Typography>Sign In</Typography>
            </LoadingButton>
        </Paper>
    )
}
export default SignInBox

