import React from 'react';
// Custom
import Header from '../../header/Header';
import SettingPage from './SettingPage';

// Component
function Settings() {
  return (
    <div>
      <Header title={'Settings'} />
      <SettingPage />
    </div>
  );
}

export default Settings;
