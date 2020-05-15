import React, { memo } from 'react';
//Vendor
import { Link } from 'react-router-dom';
import { SidePanel } from '../styledComponents/layout/sidebar/SidePanel';
// Custom
import NavLinks from './NavLinks';
import BillyLogo from '../../images/Billy-Logo.png';

// Component
function SideBar() {
  return (
    <SidePanel>
      <Link to="/">
        <img src={BillyLogo} alt="Billy Logo" />
      </Link>
      <NavLinks
        icon={'tio-dashboard_vs'}
        name={'Dashboard'}
        color={'#2E5BFF'}
        to="/"
      />
      <NavLinks
        icon={'tio-add_circle'}
        name={'Create New'}
        color={'#6772E5'}
        to="/create"
      />
      <NavLinks
        icon={'tio-receipt'}
        name={'Invoices'}
        color={'#FD5665'}
        to="/invoices"
      />
      <NavLinks
        icon={' tio-settings_vs'}
        name={'Settings'}
        color={'#FDA734'}
        to="/settings"
      />
    </SidePanel>
  );
}

export default memo(SideBar);
