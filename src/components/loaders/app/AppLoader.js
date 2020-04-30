import React from 'react';
// Vendor
import styled from 'styled-components';
// Custom
import BillyLogo from '../../../images/Billy-Logo.png';

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  div {
    width: 200px;
    img {
      width: 100%;
      display: block;
      margin: 2rem auto;
    }
    p {
      padding: 0.35rem;
      border-radius: 20px;
      background: red;
      background: #f6f7f8;
      background-size: 200%;
      background-image: -webkit-gradient(
        linear,
        left center,
        right center,
        from(#f6f7f8),
        color-stop(0.2, #edeef1),
        color-stop(0.4, #f6f7f8),
        to(#f6f7f8)
      );
      background-image: -webkit-linear-gradient(
        left,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );
      animation: placeHolderShimmer 4s linear infinite forwards;
      @keyframes placeHolderShimmer {
        0% {
          background-position: -490px 0;
        }
        100% {
          background-position: 490px 0;
        }
      }
    }
  }
`;

function AppLoader() {
  return (
    <Loader>
      <div>
        <img src={BillyLogo} alt="Billy Logo" />
        <p></p>
      </div>
    </Loader>
  );
}

export default AppLoader;
