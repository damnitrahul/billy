import React from 'react';

// Vendor
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';

// Custom
import { closeDialog } from '../../redux/actions/alertDialogActions';

// Component
function AlertDialog() {
  const { alert, alertTitle, alertText, yesBtn, noBtn, alertFn } = useSelector(
    (state) => state.alertState
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeDialog());
  };

  const handleCompleteClose = () => {
    dispatch(alertFn);
    dispatch(closeDialog());
  };

  return (
    <div>
      <Dialog
        open={alert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {noBtn}
          </Button>
          <Button onClick={handleCompleteClose} color="primary" autoFocus>
            {yesBtn}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
