import React from 'react';
// Vendor
import styled from 'styled-components';
// Custom
import laodImg from '../../../images/loaders/summ.svg';

// Styled
const SkeletonLoader = styled.div`
  img {
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    display: block;
  }
  background: #f6f7f8;
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
  box-shadow: 4px 4px 16px 4px #edeef1;
  border-radius: 15px;
  margin: 1.5rem;
  overflow: hidden;
  animation: placeHolderShimmer 2s linear infinite forwards;
  @keyframes placeHolderShimmer {
    0% {
      background-position: -490px 0;
    }
    100% {
      background-position: 490px 0;
    }
  }
`;

// Component
function SmallSummaryCard() {
  return (
    <SkeletonLoader>
      <img src={laodImg} alt="Loader" />
    </SkeletonLoader>
  );
}

export default SmallSummaryCard;
