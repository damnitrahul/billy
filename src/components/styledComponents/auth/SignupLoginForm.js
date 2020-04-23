import styled from 'styled-components';
import { SCTextField } from '../shared/TextFieldLabel';
import Waves from '../../../images/Waves-Algolia.svg';
import Pattern from '../../../images/BG-Pattern-WB.svg';

const SignUpForm = styled(SCTextField)`
  max-width: 400px;
  padding: 3rem 2rem;
  border-radius: 15px;
  box-shadow: 0 3px 9px 1px rgba(50, 50, 93, 0.15);
  margin: 0 auto;
  background-color: #fff;
  button {
    margin: 2rem 0;
    padding: 0.5;
    font-size: 1.05rem;
    width: 100%;
    background: #fbf2ea;
    color: #fda734;
    font-weight: 500;
    &:hover {
      background: #fbecde;
    }
    &:active {
      background: #fbf2ea;
      box-shadow: none;
    }
  }
  .error {
    input {
      background-color: #fae8ef;
      color: #f03738;
    }
  }
  .error-text {
    color: #fd5665;
    font-size: 0.9rem;
    line-height: 1rem;
    margin-top: 0.5rem;
    text-align: center;
    i {
      line-height: 0.5rem;
      font-size: 1rem;
      vertical-align: middle;
    }
  }
  p.footer-text {
    font-size: 0.9rem;
    text-align: center;
    a {
      color: #6772e5;
    }
  }
  p.footer-by {
    font-size: 0.9rem;
    text-align: center;
    margin-top: 1rem;
    a {
      color: #6772e5;
    }
  }

  a.forgot-password {
    color: #6772e5;
    padding: 0.3rem 0;
    display: inline-block;
    font-size: 0.8rem;
  }
`;
const SignUpPage = styled.div`
  height: 100vh;
  .signup-display {
    height: 100%;
    background: url(${Pattern}) repeat center center,
      url(${Waves}) no-repeat left bottom / contain;
    background-size: auto, 200%;
    padding: 4rem;

    h1 {
      font-size: 10vh;
    }
    p {
      margin: 0 auto;
      text-align: center;
      font-size: 2.5vh;
    }

    .branding {
      margin-top: 18vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .brand-image {
        margin: 0 auto;
        width: 30vh;
        img {
          width: 100%;
        }
        &:first-of-type {
          margin-bottom: auto;
        }
      }
    }
  }
  .signup-form {
  }
  .MuiGrid-root.MuiGrid-container {
    height: 100%;
  }
  background: url(${Waves}) no-repeat right bottom / contain;
`;

const LoginBox = styled(SignUpForm)`
  button {
    background: #b9f4bc;
    color: #1bb978;
    font-weight: 500;
    &:hover {
      background: #b3ecb5;
    }
    &:active {
      background: #b9f4bc;
      box-shadow: none;
    }
  }
`;
const FormHeader = styled.div`
  .brand-image {
    img {
      display: block;
      margin: 0 auto 2rem;
      width: 150px;
    }
  }
  .greeting {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }
  .greeting-lg {
    font-size: 2rem;
    text-align: center;
    color: #6b7c93;
  }
`;
export { SignUpForm, SignUpPage, LoginBox, FormHeader };
