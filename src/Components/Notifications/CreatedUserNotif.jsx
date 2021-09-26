import { Snackbar, SnackbarContent } from "@material-ui/core"
import SlideTransition from "../Transitions/SlideTransition"

const CreatedUserNotif = (props) => {
    return(
        <Snackbar 
            open={props.isOpen}
            onClose={props.addUserHandleClose}
            TransitionComponent={SlideTransition}
            autoHideDuration={1000}
            className={"empty-field-snackbar"}
            >
            <SnackbarContent message={`Created new user: ${props.lastCreatedUser}`}/>
        </Snackbar>
    )
}
export default CreatedUserNotif