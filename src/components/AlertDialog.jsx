import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function AlertDialog({ open, handleClose, handleUpdate }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Override old Data</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you want to proceed?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
