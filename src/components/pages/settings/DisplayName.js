import React from 'react';
//Vendor
import { useSelector } from 'react-redux';

// Component
function DisplayName() {
  const ProfileSettings = useSelector((state) => state.firebase.profile);
  const { firstName, lastName } = ProfileSettings;
  return (
    <div className="name-photo">
      <div>
        <img
          src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&size=80&rounded=true&color=2e5bff&background=e0e7ff`}
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
