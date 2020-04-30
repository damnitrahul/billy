import React from 'react';
//Vendor
import Hidden from '@material-ui/core/Hidden';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// Custom
import {
  SignUpForm as SignUpBox,
  FormHeader
} from '../../styledComponents/auth/SignupLoginForm';
import { TwoColField } from '../../styledComponents/shared/TextFieldLabel';
import { Button } from '../../styledComponents/shared/Button';
import { signUp } from '../../../redux/actions/authActions';
import BillyLogo from '../../../images/Billy-Logo.png';

// Component
function SignUpForm() {
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.loadingState.registerBtn);
  const errorState = useSelector(
    (state) => state.auth.authError && state.auth.authError.message
  );
  const { register, handleSubmit, errors } = useForm();

  const handleRegister = (data, e) => {
    e.preventDefault();
    dispatch(signUp(data));
  };

  return (
    <SignUpBox>
      <FormHeader>
        <Hidden lgUp>
          <div className="brand-image">
            <img src={BillyLogo} alt="BillyLogo" />
          </div>
        </Hidden>

        <div className="greeting">Create an Account</div>
      </FormHeader>
      <form onSubmit={handleSubmit(handleRegister)}>
        <TwoColField>
          <div className={errors.firstName && 'error'}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Regina"
              ref={register({
                required: true,
                minLength: 2
              })}
            />
          </div>
          <div className={errors.lastName && 'error'}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Phalange"
              ref={register({
                required: true,
                minLength: 2
              })}
            />
          </div>
        </TwoColField>
        {(errors.firstName || errors.lastName) && (
          <div className="error-text">
            <i className="tio-error_outlined"></i> Please enter a valid name
          </div>
        )}
        <div className={errors.email && 'error'}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="regina@email.com"
            ref={register({
              required: true,
              minLength: 2,
              pattern: /\S+@\S+\.\S+/
            })}
          />
          {errors.email && (
            <div className="error-text">
              <i className="tio-error_outlined"></i> Please enter a valid email
            </div>
          )}
          {!errors.email && (
            <div
              className="error-text"
              style={{ color: '#3a3a3a', fontSize: '0.8rem' }}
            >
              Psst, No Email Verification Required
            </div>
          )}
        </div>
        <div className={errors.password && 'error'}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Hunter2"
            ref={register({
              required: true,
              minLength: 6
            })}
          />
          {errors.password && (
            <div className="error-text">
              <i className="tio-error_outlined"></i> Password should be at least
              6 characters long
            </div>
          )}
        </div>
        {errorState && (
          <div className="error-text">
            <i className="tio-error_outlined"></i> {errorState}
          </div>
        )}
        <Button type="submit" disabled={loadingState}>
          Create Your Account{' '}
          {loadingState && <i className="tio-sync spin-load"></i>}
        </Button>
      </form>
      <p className="footer-text">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <p className="footer-by ">
        Created By{' '}
        <a
          href="https://damnitrahul.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rahul Raj
        </a>
      </p>
    </SignUpBox>
  );
}

export default SignUpForm;
