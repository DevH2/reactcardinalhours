import { Snackbar, SnackbarContent } from "@material-ui/core"

const CreatedUserNotif = (props) => {
    <Snackbar
        open={props.createUserIsOpen} 
        className={"empty-field-snackbar"} 
        autoHideDuration={1000} 
        onClose={props.createUserHandleOnClose}
        TransitionComponent={props.slideTransition}>
        <SnackbarContent message={`Created user ${props.username}`}/>
    </Snackbar>
}
export default CreatedUserNotif