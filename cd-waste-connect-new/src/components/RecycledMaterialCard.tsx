import React from 'react';

interface Material {
  id: number;
  name: string;
  description: string;
}

const RecycledMaterialCard: React.FC<{ material: Material }> = ({ material }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
      <h3>{material.name}</h3>
      <p>{material.description}</p>
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
        View Details
      </button>
    </div>
  );
};

export default RecycledMaterialCard;