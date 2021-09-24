import { Snackbar, SnackbarContent } from "@material-ui/core"
const EmptyFieldNotif = (props) => {
    return (
        <Snackbar 
              open={props.createUserIsOpen} 
              className={"empty-field-snackbar"} 
              autoHideDuration={1000} 
              onClose={props.createUserHandleOnClose}
              TransitionComponent={props.slideTransition}>
              <SnackbarContent message={"No empty or duplicate fields."}/>
        </Snackbar>
    )
}

export default EmptyFieldNotif