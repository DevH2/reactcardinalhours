import { Snackbar, SnackbarContent } from '@material-ui/core'
import React from 'react'
import SlideTransition from "../Transitions/SlideTransition"

const InvalidPasswordNotif = (props) =>{
    return (
        <div>
            <Snackbar
                autoHideDuration={1000} 
                open={props.isOpen} 
                onClose={props.invalidPassHandleClose} 
                className={"empty-field-snackbar"}
                TransitionComponent={SlideTransition}>
                <SnackbarContent message={"Invalid password"}/>
            </Snackbar>
        </div>
    )
}

export default InvalidPasswordNotif
