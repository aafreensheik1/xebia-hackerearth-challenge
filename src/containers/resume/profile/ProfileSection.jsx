import React from 'react';
import './profileSection.scss';

export default function ProfileSection({ id, profile }) {
  const { name, designation, phone, email, description, profileUrl } = profile;
  return (
    <div className="profile-section" id={id}>
      <div className="profile-details">
        <img src={profileUrl} className="profile-photo" />
        <h3>{name}</h3>
        <p>{designation}</p>
        <span className="divider"/>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <div className="profile-about">
        <span>Hello!</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
