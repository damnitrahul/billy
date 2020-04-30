import React from 'react';

// Vendor
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Hidden } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

// Custom
import { BottomPanel } from '../styledComponents/layout/bottomNavigation/BottomPanel';

// IconComponent for MUI Icon Button
const AddCircleIcon = () => <i className="tio-add_circle tio-size"></i>;
const DashboardIcon = () => <i className="tio-dashboard_vs tio-size"></i>;
const ReceiptIcon = () => <i className="tio-receipt tio-size"></i>;
const SettingIcon = () => <i className=" tio-settings_vs tio-size"></i>;

// Component
function BottomNavigationn() {
  const [value, setValue] = React.useState('dashboard');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Hidden mdUp>
      <BottomPanel>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Dashboard"
            value="dashboard"
            icon={<DashboardIcon />}
            component={NavLink}
            to="/"
            exact
          />
          <BottomNavigationAction
            label="New"
            value="new"
            icon={<AddCircleIcon />}
            component={NavLink}
            to="/create"
            exact
          />
          <BottomNavigationAction
            label="Invoices"
            value="invoices"
            icon={<ReceiptIcon />}
            component={NavLink}
            to="/invoices"
            exact
          />
          <BottomNavigationAction
            label="Settings"
            value="settings"
            icon={<SettingIcon />}
            component={NavLink}
            to="/settings"
            exact
          />
        </BottomNavigation>
      </BottomPanel>
    </Hidden>
  );
}

export default BottomNavigationn;
