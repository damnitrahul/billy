import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { SignUpPage } from '../../styledComponents/auth/SignupLoginForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import { useDispatch } from 'react-redux';

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
