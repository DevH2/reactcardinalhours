import { Snackbar, SnackbarContent } from "@material-ui/core"
const SignedInNotif = (props) => {
    return (
        <Snackbar
              open={props.sOutisOpen} 
              className={"empty-field-snackbar"} 
              autoHideDuration={1000} 
              onClose={props.sOutHandleClose}
              TransitionComponent={props.slideTransition}
            >
              <SnackbarContent message={`Signed in ${props.currentUser}`} />
        </Snackbar>
    )
}

export default SignedInNotif