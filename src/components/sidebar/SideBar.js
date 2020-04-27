import React, { memo } from 'react';
import { SidePanel } from '../styledComponents/layout/sidebar/SidePanel';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import BillyLogo from '../../images/Billy.png';

function SideBar() {
  return (
    <SidePanel>
      <Link to="/">
        <img src={BillyLogo} alt="Billy Logo" />
      </Link>
      <NavLinks
        icon={'tio-dashboard_vs'}
        name={'Dash Board'}
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
