import { Snackbar, SnackbarContent } from "@material-ui/core"
const SignedInNotif = (props) => {
    return (
        <Snackbar
              open={props.isOpen} 
              className={"empty-field-snackbar"} 
              autoHideDuration={1000} 
              onClose={props.sOutHandleClose}
              TransitionComponent={props.slideTransition}
            >
              <SnackbarContent message={`Signed ${props.currentUser}`} />
        </Snackbar>
    )
}

export default SignedInNotif