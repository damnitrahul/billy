import styled from 'styled-components';

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
  @media screen and (max-width: 979px) {
    flex-direction: column;
    max-width: 450px;
    margin: 2rem auto;
  }

  button {
    display: inline-block;
    font-size: 16px;
    line-height: 16px;
    padding: 0.5rem 1rem;
  }
  button,
  a {
    margin: 0.5rem 1rem;
    text-align: center;
  }
`;
export { ButtonDiv };
