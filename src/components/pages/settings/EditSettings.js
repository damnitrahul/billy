import React from 'react';
import Header from '../../header/Header';
import EditSettingsPage from './EditSettingsPage';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../../redux/actions/authActions';
import ChangePassword from './ChangePassword';
function EditSettings() {
  const dispatch = useDispatch();
  const handlePass = () => {
    dispatch(changePassword());
  };
  return (
    <div>
      <Header title={'Edit Settings'} />
      <ChangePassword />
      <EditSettingsPage />
    </div>
  );
}

export default EditSettings;
