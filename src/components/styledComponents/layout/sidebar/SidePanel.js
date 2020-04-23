import styled from 'styled-components';

const SidePanel = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-shadow: 2px 4px 18px rgba(0, 0, 0, 0.08);
  a {
    margin: 1rem 3rem 1rem;
  }
  a:first-child {
    margin: 1rem auto 3rem;
    width: 160px;
    img {
      width: 100%;
    }
  }
`;

export { SidePanel };
