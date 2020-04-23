import styled from 'styled-components';

const SCTextField = styled.div`
  label {
    display: block;
    padding: 1rem 0 0.5rem;
    color: #32325d;
  }
  input {
    font-family: 'Lexend Deca';
    border: transparent 2px solid;
    border-radius: 3px;
    background-color: #f2f6f9;
    color: #6b7c93;
    box-shadow: 0 3px 6px rgba(50, 50, 93, 0.1);
    padding: 6px 10px;
    transition: box-shadow 350ms ease;
    display: block;
    width: 100%;
    sa &:active,
    &:focus {
      box-shadow: 0 3px 9px 2px rgba(50, 50, 93, 0.15);
      outline: none;
    }
  }
`;
const TwoColField = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
export { SCTextField, TwoColField };
