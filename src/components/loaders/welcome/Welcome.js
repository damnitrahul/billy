import React from 'react';
//Vendor
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Custom
import welcomeImg from '../../../images/welcome.svg';

// Styled
const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;

  div {
    width: 100%;
    max-width: 500px;
    text-align: center;
    padding: 2rem;
    a {
      display: block;
      width: 100%;
      img {
        width: 100%;
        display: block;
        margin: 2rem auto;
      }
    }
  }
`;

// Component
function Welcome() {
  return (
    <Loader>
      <div>
        <Link to="/create">
          <img src={welcomeImg} alt="Welcome to Billy" />
        </Link>
      </div>
    </Loader>
  );
}

export default Welcome;
