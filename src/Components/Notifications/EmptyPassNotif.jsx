import { Snackbar, SnackbarContent } from "@material-ui/core"
import SlideTransition from "../Transitions/SlideTransition"
const EmptyPassNotif = (props) => {
    return(
        <Snackbar 
            autoHideDuration={1000} 
            open={props.isOpen} 
            onClose={props.handleOnClose} 
            className={"empty-field-snackbar"}
            TransitionComponent={SlideTransition}>
            <SnackbarContent message={"No empty or duplicate passwords."}/>
        </Snackbar>
    )
}
export default EmptyPassNotif