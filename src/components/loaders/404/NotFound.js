import React from 'react';
// Vendor
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Custom
import { SecondaryButton } from '../../styledComponents/shared/Button';
import NotFoundImg from '../../../images/404.svg';

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  div {
    width: 100%;
    max-width: 500px;

    text-align: center;
    img {
      width: 100%;
      display: block;
      margin: 2rem auto;
    }
  }
`;

function NotFound() {
  return (
    <Loader>
      <div>
        <img src={NotFoundImg} alt="Not Found" />
        <SecondaryButton as={Link} to="/" secondary>
          Return Home
        </SecondaryButton>
      </div>
    </Loader>
  );
}

export default NotFound;
