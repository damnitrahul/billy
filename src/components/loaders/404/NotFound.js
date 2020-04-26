import React from 'react';
import styled from 'styled-components';
import NotFoundImg from '../../../images/404.svg';
import { Link } from 'react-router-dom';
import { SecondaryButton } from '../../styledComponents/shared/Button';

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
        <img src={NotFoundImg} alt="404 Image" />
        <SecondaryButton as={Link} to="/" secondary>
          Return Home
        </SecondaryButton>
      </div>
    </Loader>
  );
}

export default NotFound;
