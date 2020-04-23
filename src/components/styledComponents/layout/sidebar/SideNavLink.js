import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active';

const SideNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  display: inline-block;
  border-radius: 50px;
  transition: box-shadow 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  font-size: 1.1rem;
  > p,
  span {
    display: inline-block;
    color: #6b7c93;
  }
  > span {
    color: ${props => props.color};
    font-size: 1.3rem;
    line-height: 1.3rem;
    vertical-align: middle;
    padding: 0.4rem 0.5rem;
    border-radius: 150px;
    transition: background-color 0.7s cubic-bezier(0.19, 1, 0.22, 1);
    i {
      height: 1.2rem;
      /* line-height: 1.2rem;
      vertical-align: middle; */
    }
  }

  > p {
    padding: 0.4rem 1.2rem 0.4rem 0.8rem;
    line-height: 1.3rem;
    vertical-align: middle;
    transition: color 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover,
  &.${activeClassName} {
    box-shadow: 3px 3px 12px ${props => props.color + 26};
    > span {
      background-color: ${props => props.color + 26};
    }
    > p {
      color: ${props => props.color};
    }
  }
`;

export { SideNavLink };
