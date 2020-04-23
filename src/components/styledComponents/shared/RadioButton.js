import styled from 'styled-components';
const RadioInput = styled.div`
  position: relative;
  display: inline-block;

  input {
    position: absolute;
    visibility: hidden;
  }
  label {
    padding: 0.3rem 0.6rem;
    border: 2px solid #a0a0a0;
    border-radius: 5px;
    color: #a0a0a0;
    cursor: pointer;
  }
  label {
    display: inline-block;
    padding: 0.3rem 0.6rem;
    border: 2px solid #a0a0a0;
    border-radius: 5px;
    color: #a0a0a0;
    cursor: pointer;
  }

  input[type='radio']:checked ~ label {
    border: 2px solid #6772e5;
    color: #6772e5;
  }
`;
export { RadioInput };
