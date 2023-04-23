import React from 'react';

const Profile = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src="https://via.placeholder.com/150" alt="Profile" style={{ borderRadius: '50%', marginTop: '2rem' }} />
      <h1 style={{ marginTop: '1rem' }}>John Doe</h1>
      <p style={{ marginBottom: '1rem' }}>john.doe@example.com</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <p style={{ marginBottom: '0.5rem' }}>Location:</p>
        <p>Los Angeles, CA</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <p style={{ marginBottom: '0.5rem' }}>Bio:</p>
        <p>Avid reader, coffee lover, and tech enthusiast.</p>
      </div>
    </div>
  );
};

export default Profile;
