import { Snackbar, SnackbarContent } from "@material-ui/core"
import SlideTransition from "../Transitions/SlideTransition"
const EmptyFieldNotif = (props) => {
    return (
        <Snackbar 
              open={props.isOpen} 
              className={"empty-field-snackbar"} 
              autoHideDuration={1000} 
              onClose={props.createUserHandleOnClose}
              TransitionComponent={SlideTransition}>
              <SnackbarContent message={"No empty or duplicate fields."}/>
        </Snackbar>
    )
}

export default EmptyFieldNotif
