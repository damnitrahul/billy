import React from 'react';
//Vendor
import Header from '../../header/Header';
// Custom
import EditSettingsPage from './EditSettingsPage';
import ChangePassword from './ChangePassword';

// Component
function EditSettings() {
  return (
    <div>
      <Header title={'Edit Settings'} />
      <ChangePassword />
      <EditSettingsPage />
    </div>
  );
}

export default EditSettings;
