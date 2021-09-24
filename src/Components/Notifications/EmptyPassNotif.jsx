import { Snackbar, SnackbarContent } from "@material-ui/core"
const EmptyPassNotif = (props) => {
    return(
        <Snackbar 
            autoHideDuration={1000} 
            open={props.isOpen} 
            onClose={props.handleOnClose} 
            className={"empty-field-snackbar"}
            TransitionComponent={props.slideTransition}>
            <SnackbarContent message={"No empty or duplicate passwords."}/>
        </Snackbar>
    )
}
export default EmptyPassNotif