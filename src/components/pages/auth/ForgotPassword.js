import React, { useEffect } from 'react';

//Vendor
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// Custom
import { SignUpPage } from '../../styledComponents/auth/SignupLoginForm';
import ForgotPasswordForm from './ForgotPasswordForm';

// Component
function ForgotPassword() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch({ type: 'RESET_AUTH_ERROR' });
    };
  }, []);

  return (
    <SignUpPage>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={6} lg={6} className="signup-form">
          <ForgotPasswordForm />
        </Grid>
      </Grid>
    </SignUpPage>
  );
}

export default ForgotPassword;
