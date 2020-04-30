import React from 'react';
//Vendor
import { Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// Custom
import { SettingsLayout } from '../../styledComponents/settings/Settings';
import { Button, FlatButton } from '../../styledComponents/shared/Button';
import { changePassword } from '../../../redux/actions/authActions';

// Component
function ChangePassword() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch } = useForm();
  const loadingState = useSelector((state) => state.loadingState.passwordBtn);

  const errorState = useSelector(
    (state) => state.auth.passChangeError && state.auth.passChangeError.message
  );

  const handleChangePassword = ({ prevPass, pass }) => {
    dispatch(changePassword(prevPass, pass));
  };
  return (
    <SettingsLayout>
      <div className="default-settings">
        <h2>Change Password</h2>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <div className="textfield-container">
              <TextField
                label="Old Password"
                name="prevPass"
                type="password"
                inputRef={register}
                error={errorState && true}
                helperText={errorState && errorState}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="textfield-container">
              <TextField
                label="New Password"
                name="pass"
                type="password"
                inputRef={register({ min: 6 })}
                error={errors.pass && true}
                helperText={errors.pass && 'Invalid Input'}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="textfield-container">
              <TextField
                label="Confirm Password"
                name="confirmPass"
                type="password"
                inputRef={register({
                  validate: (value) => {
                    return value === watch('pass');
                  }
                })}
                error={errors.confirmPass && true}
                helperText={errors.confirmPass && "New Password doesn't match"}
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
              />
            </div>
          </Grid>
        </Grid>
        <FlatButton as={Link} to={'/settings'} style={{ margin: '0 1rem' }}>
          Go Back
        </FlatButton>
        <Button
          secondary
          onClick={handleSubmit(handleChangePassword)}
          disabled={loadingState}
        >
          Change Password{' '}
          {loadingState && <i className="tio-sync spin-load"></i>}
        </Button>
      </div>
    </SettingsLayout>
  );
}

export default ChangePassword;
