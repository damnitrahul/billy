import React, { useEffect } from 'react';
//Vendor
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// Custom
import { SignUpPage } from '../../styledComponents/auth/SignupLoginForm';
import LoginForm from './LoginForm';

// Component
function Login() {
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
          <LoginForm />
        </Grid>
      </Grid>
    </SignUpPage>
  );
}

export default Login;
