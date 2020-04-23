import React from 'react';
import { useSelector } from 'react-redux';

function DisplayName() {
  const ProfileSettings = useSelector(state => state.firebase.profile);
  const { firstName, lastName } = ProfileSettings;
  return (
    <div className="name-photo">
      <div>
        <img
          src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&size=80&rounded=true`}
          alt="User Logo"
        />
      </div>
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
}

export default DisplayName;
