import React from 'react';
import {
  LoginBox,
  FormHeader,
} from '../../styledComponents/auth/SignupLoginForm';
import { Button } from '../../styledComponents/shared/Button';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../redux/actions/authActions';
import { Link } from 'react-router-dom';
import BillyLogo from '../../../images/Billy-Logo.png';
function LoginForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const loadingState = useSelector((state) => state.loadingState.forgotPassBtn);
  const errorState = useSelector(
    (state) => state.auth.forgotPassError && state.auth.forgotPassError.message
  );

  const handleLogin = (data, e) => {
    e.preventDefault();
    dispatch(forgotPassword(data.email));
  };

  return (
    <LoginBox>
      <FormHeader>
        <div className="brand-image">
          <img src={BillyLogo} alt="BillyLogo" />
        </div>

        <div className="greeting">Reset your password</div>
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
              pattern: /\S+@\S+\.\S+/,
            })}
            placeholder="name@email.com"
          />
          {errors.email && (
            <div className="error-text">
              <i className="tio-error_outlined"></i> Please Enter A Valid Email
            </div>
          )}
        </div>

        {errorState && (
          <div className="error-text">
            <i className="tio-error_outlined"></i> {errorState}
          </div>
        )}
        <Button type="submit" disabled={loadingState}>
          Send Password Reset Email{' '}
          {loadingState && <i className="tio-sync spin-load"></i>}
        </Button>
      </form>
      <p className="footer-text">
        <Link to="/login"> Login</Link> to billy
      </p>
      <p className="footer-by ">
        Created By{' '}
        <a href="https://damnitrahul.com/" target="_blank">
          Rahul Raj
        </a>
      </p>
    </LoginBox>
  );
}

export default LoginForm;
