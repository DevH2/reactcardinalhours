import { SnackbarContent, Snackbar } from '@material-ui/core'
import React from 'react'
import SlideTransition from '../Transitions/SlideTransition'

const InvalidUsernameNotif = (props) => {
    return (
        <div>
            <Snackbar
                autoHideDuration={1000} 
                open={props.isOpen} 
                onClose={props.invalidUsernameHandleClose} 
                className={"empty-field-snackbar"}
                TransitionComponent={SlideTransition}>
                <SnackbarContent message={"Invalid username format. Please use First, Last"}/>
            </Snackbar>
        </div>
    )
}

export default InvalidUsernameNotif
