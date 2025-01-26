import React from 'react';

const ClassifyWaste: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Classify Waste</h1>
      <div
        style={{
          border: '2px dashed #ccc',
          padding: '2rem',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        <p>Drag and drop your waste material image here</p>
        <button
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default ClassifyWaste;