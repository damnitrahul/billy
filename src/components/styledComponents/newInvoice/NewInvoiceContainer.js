import styled from 'styled-components';

const InvoiceContainer = styled.div`
  max-width: 1140px;
  padding: 2rem;
  margin: 0 auto;

  h3 {
    font-size: 2.5rem;
    text-align: right;
  }
  p.invoice-title {
    padding: 1rem 0 0.5rem;
  }
  .textfield-container {
    max-width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 980px) {
      width: 100%;
      max-width: 100%;
    }
  }
  .radio-group {
    div {
      width: calc(50% - 1rem);
      label {
        width: 100%;
        text-align: center;
      }
      &:first-child {
        margin-right: 2rem;
      }
    }
  }
  .error-text {
    color: #fd5665;
    font-size: 0.9rem;
    line-height: 1rem;
    margin-top: 0.5rem;
    text-align: center;
    padding: 0.5rem;
    i {
      line-height: 0.5rem;
      font-size: 1rem;
      vertical-align: middle;
    }
  }
  .submit-btn {
    padding: 0.5rem 2rem;
    font-size: 1.1rem;
    margin: 0 auto;
    display: block;
    @media screen and (max-width: 600px) {
      width: 100%;
      max-width: 100%;
    }
  }

  .MuiGrid-root.MuiGrid-container.invoice-details {
    margin-top: 2rem;
  }
  .MuiOutlinedInput-adornedEnd.MuiOutlinedInput-adornedEnd {
    padding: 0;
  }
  .MuiPickersToolbar-toolbar.MuiPickersToolbar-toolbar.MuiPickersDatePickerRoot-toolbar {
    background-color: #6772e5;
  }
`;
export { InvoiceContainer };
