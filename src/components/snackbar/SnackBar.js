import React, { useEffect } from 'react';
//Vendor
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';

// Component
function AlertSnackbar() {
  const barState = useSelector((state) => state.snackbar);
  const { message } = barState;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    return () => {
      setOpen(true);
    };
  }, [barState]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="medium" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}

export default AlertSnackbar;
