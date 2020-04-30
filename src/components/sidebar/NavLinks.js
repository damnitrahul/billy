import React from 'react';
// Custom
import { SideNavLink } from '../styledComponents/layout/sidebar/SideNavLink';

// Component
function NavLinks(props) {
  const { icon, name, color, to } = props;
  return (
    <SideNavLink exact to="/" color={color} to={to}>
      <span>
        <i className={icon}></i>
      </span>{' '}
      <p>{name}</p>
    </SideNavLink>
  );
}

export default NavLinks;
