import { Snackbar, SnackbarContent } from "@material-ui/core"

const CreatedUserNotif = (props) => {
    return(
        <Snackbar 
            open={props.isOpen}
            onClose={props.addUserHandleClose}
            TransitionComponent={props.slideTransition}
            autoHideDuration={1000}
            className={"empty-field-snackbar"}
            >
            <SnackbarContent message={`Created new user: ${props.lastCreatedUser}`}/>
        </Snackbar>
    )
}
export default CreatedUserNotif