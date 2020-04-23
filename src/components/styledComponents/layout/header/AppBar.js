import styled from 'styled-components';

const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  align-items: center;
  border-bottom: rgba(0, 0, 0, 0.05) solid 1px;
  h2 {
    font-weight: 400;
  }
  @media screen and (max-width: 979px) {
    font-size: 1rem;
  }
  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      margin-left: 1rem;
      color: #3a3a3a;

      @media screen and (max-width: 979px) {
        display: none;
      }
    }
    img {
      width: 50px;
      border-radius: 60px;
    }
  }
`;

export { AppBar };
