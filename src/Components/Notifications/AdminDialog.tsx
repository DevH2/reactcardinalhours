import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import { Fragment, useState } from "react"
import CustomTextField from "../CustomTextField"

type AdminDialogProps = {
    isOpen:boolean;
}
const AdminDialog = (props:AdminDialogProps):JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const handleCloseDialog = ():void => setIsOpen(false)
    return (
        <Fragment>
            <Dialog 
                disableEnforceFocus
                style={{ pointerEvents: 'none' }}
                PaperProps={{ style: { pointerEvents: 'auto' } }} 
                hideBackdrop
                open={isOpen}
            >
            <DialogTitle>Enter Admin Password</DialogTitle>
            <DialogActions>
                <CustomTextField label="Password"/>
                <Button onClick={handleCloseDialog}>
                    <Typography>Submit</Typography>
                </Button>
            </DialogActions>
        </Dialog>
        </Fragment>
    )
}

export default AdminDialog