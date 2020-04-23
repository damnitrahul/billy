import styled from 'styled-components';
const BodyContainer = styled.div`
  position: relative;
  height: 100%;

  > div:first-of-type {
    position: fixed;
    height: 100%;
    width: 300px;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    z-index: 1;

    @media screen and (max-width: 960px) {
      display: none;
    }
  }
  > div:nth-of-type(2) {
    position: fixed;
    height: 100%;
    left: 300px;
    top: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;

    @media screen and (max-width: 960px) {
      left: 0;
      width: 100%;
      padding-bottom: 60px;
    }
  }
`;
export { BodyContainer };
