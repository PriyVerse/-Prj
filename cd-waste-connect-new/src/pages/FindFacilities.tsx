import React from 'react';

const FindFacilities: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Find Recycling Facilities</h1>
      <div
        style={{
          marginTop: '1rem',
          height: '400px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Map will be displayed here</p>
      </div>
    </div>
  );
};

export default FindFacilities;