import styled from 'styled-components';

// Base Button
const BaseButton = styled.button`
  display: inline-block;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.7s cubic-bezier(0.19, 1, 0.22, 1),
    transform 0.7s cubic-bezier(0.19, 1, 0.22, 1),
    box-shadow 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  border: none;
`;
// Primary Button
const Button = styled(BaseButton)`
  background-color: ${props => (props.secondary ? '#24B47E' : '#6772e5')};
  background-color: ${props => props.color && props.color};
  color: #fff;
  box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px 0px,
    rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;

  &:hover {
    background-color: ${props => (props.secondary ? '#27CF90' : '#7795f8')};
    background-color: ${props => props.color && props.color};
    transform: translateY(-2px);
    box-shadow: rgba(50, 50, 93, 0.18) 0px 4px 12px 0px,
      rgba(0, 0, 0, 0.08) 0px 1px 6px 0px;
  }
  &:active {
    background-color: ${props => (props.secondary ? '#1FA774' : '#555abf')};
    background-color: ${props => props.color && props.color};
    transform: translateY(0);
    box-shadow: rgba(22, 22, 41, 0.15) 0px 4px 8px 4px,
      rgba(0, 0, 0, 0.1) 0px 1px 6px 2px;
    outline: none;
  }
  &:disabled {
    transform: none;
    box-shadow: none;
    position: relative;
    z-index: 1;
    box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px 0px,
      rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
      z-index: 2;
      border-radius: 5px;
    }
  }
`;

// Secondary Button
const FlatButton = styled(BaseButton)`
  color: ${props => (props.secondary ? '#24B47E' : '#6772e5')};
  background-color: #fff;
  &:hover {
    background-color: #f8f8f8;
    color: ${props => (props.secondary ? '#27CF90' : '#7795f8')};
  }
  &:active {
    color: ${props => (props.secondary ? '#1FA774' : '#555abf')};
  }
`;

// Secondary Button With Hover
const SecondaryButton = styled(BaseButton)`
  color: ${props => (props.secondary ? '#24B47E' : '#6772e5')};
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px 0px,
    rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
  &:hover {
    background-color: #f8f8f8;
    color: ${props => (props.secondary ? '#27CF90' : '#7795f8')};
    transform: translateY(-2px);
    box-shadow: rgba(50, 50, 93, 0.18) 0px 4px 12px 0px,
      rgba(0, 0, 0, 0.08) 0px 1px 6px 0px;
  }
  &:active {
    color: ${props => (props.secondary ? '#1FA774' : '#555abf')};
    transform: translateY(0);
    box-shadow: rgba(22, 22, 41, 0.15) 0px 4px 8px 4px,
      rgba(0, 0, 0, 0.1) 0px 1px 6px 2px;
    outline: none;
  }
`;

export { Button, SecondaryButton, FlatButton, BaseButton };
