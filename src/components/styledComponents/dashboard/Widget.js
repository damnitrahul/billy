import styled from 'styled-components';

const Widget = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 4px 4px 16px 4px ${props => props.color + '1a'};
  border-radius: 15px;
  padding: 1.5rem 1rem;
  color: #3a3a3a;
  margin: 1.5rem;
  i {
    display: inline-block;
    font-size: 62px;
    line-height: 62px;
    vertical-align: middle;
    color: ${props => props.color};
    padding: 1rem;
    border-radius: 80px;
    background: ${props => props.color + '10'};
    box-shadow: 0px 0px 24px ${props => props.color + '2a'};
  }
  h2 {
    color: ${props => props.color};
  }
`;

const GraphWidget = styled.div`
  box-shadow: 4px 4px 16px 4px #3a3a3a1a;
  border-radius: 15px;
  margin: 3rem 1rem 1rem;
  padding: 1rem;
  h3 {
    text-align: center;
  }
`;

export { Widget, GraphWidget };
