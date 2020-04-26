import React from 'react';
import styled from 'styled-components';
import nothing from '../../../images/nothing.svg';
import { Link } from 'react-router-dom';

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  div {
    width: 100%;
    max-width: 500px;

    text-align: center;
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
function NothingHere() {
  return (
    <Loader>
      <div>
        <Link to="/create">
          <img src={nothing} alt="404 Image" />
        </Link>
      </div>
    </Loader>
  );
}

export default NothingHere;
