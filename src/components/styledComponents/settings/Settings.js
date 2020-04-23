import styled from 'styled-components';

const Profile = styled.div``;
const SettingsLayout = styled.div`
  .name-photo {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    p {
      padding: 1rem;
      font-size: 1.3rem;
    }
  }

  .default-settings {
    max-width: 1140px;
    padding: 1.5rem;
    margin: 0 auto;
    p {
      font-size: 1.2rem;
      span {
        display: block;
        padding: 0.5rem 0;
        font-size: 0.95rem;
        color: #6772e5;
      }
    }
    a,
    button {
      margin-top: 1rem;
    }
    .MuiInputBase-root.MuiInputBase-root.MuiOutlinedInput-root.Mui-disabled
      fieldset {
      border-color: transparent;
    }
    .MuiInputBase-root.MuiInputBase-root.MuiOutlinedInput-root {
      color: #3a3a3a;
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

    h2 {
      padding: 1rem 0;
    }

    .MuiFormHelperText-contained.Mui-error {
      font-size: 0.8rem;
    }
  }
`;

export { Profile, SettingsLayout };
