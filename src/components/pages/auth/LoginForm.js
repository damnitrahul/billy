import React from 'react';
// Vendor
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Custom
import {
  LoginBox,
  FormHeader
} from '../../styledComponents/auth/SignupLoginForm';
import { Button } from '../../styledComponents/shared/Button';
import { signIn } from '../../../redux/actions/authActions';
import BillyLogo from '../../../images/Billy-Logo.png';

// Component
function LoginForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const loadingState = useSelector((state) => state.loadingState.loginBtn);
  const errorState = useSelector(
    (state) => state.auth.authError && state.auth.authError.message
  );

  const handleLogin = (data, e) => {
    e.preventDefault();
    dispatch(signIn(data));
  };
  return (
    <LoginBox>
      <FormHeader>
        <div className="brand-image">
          <img src={BillyLogo} alt="BillyLogo" />
        </div>

        <div className="greeting-lg">Welcome Back!</div>
        <div className="greeting">Sign in to your account</div>
      </FormHeader>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className={errors.email && 'error'}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={register({
              required: true,
              minLength: 2,
              pattern: /\S+@\S+\.\S+/
            })}
            placeholder="name@email.com"
          />
          {errors.email && (
            <div className="error-text">
              <i className="tio-error_outlined"></i> Please enter a valid email
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
        </div>
        <Link to="/forgot" className="forgot-password">
          Forgot Password?
        </Link>
        {errors.password && (
          <div className="error-text">
            <i className="tio-error_outlined"></i> Password should be at least 6
            characters long
          </div>
        )}
        {errorState && (
          <div className="error-text">
            <i className="tio-error_outlined"></i> {errorState}
          </div>
        )}
        <Button type="submit" disabled={loadingState}>
          Continue {loadingState && <i className="tio-sync spin-load"></i>}
        </Button>
      </form>
      <p className="footer-text">
        New to Billy? <Link to="/register">Create an Account</Link>
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
    </LoginBox>
  );
}

export default LoginForm;
