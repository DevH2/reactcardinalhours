import { LoadingButton } from '@mui/lab'
import { Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomTextField from './CustomTextField'
import AdminDialog from './Notifications/AdminDialog'

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
    enterFieldsText: {
        textAlign:"center",
        padding:"0 0 1em 0",
        color:"#595959",
        fontWeight:"bold",
        fontSize:"18px"
    },
    textField: {
        margin:"0 0 1em 0"
    },
    button: {
        backgroundColor:"#ff073a",
        color:"whitesmoke",
        '&:hover': {
            background: 'rgba(255,7,58,0.9)',
        },
     },
}
const RegisterBox = ():JSX.Element => {
    return (
        <Paper sx={styles.container}>
            <Typography sx={styles.enterFieldsText}>Enter User Info</Typography>
            <CustomTextField label="First Name" sx={styles.textField}/>
            <CustomTextField label="Last Name" sx={styles.textField}/>
            <CustomTextField label="Password" sx={styles.textField}/>
            <LoadingButton size="large" variant="contained" sx={styles.button}>
                <Typography>Submit</Typography>
            </LoadingButton>
            <AdminDialog isOpen={true}/>
        </Paper>
    )
}

export default RegisterBox
