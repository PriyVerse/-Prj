import React from 'react';
import RecycledMaterialCard from '../components/RecycledMaterialCard';

const Marketplace: React.FC = () => {
  const materials = [
    {
      id: 1,
      name: 'Recycled Material 1',
      description: 'Sample material description...',
    },
    {
      id: 2,
      name: 'Recycled Material 2',
      description: 'Sample material description...',
    },
    {
      id: 3,
      name: 'Recycled Material 3',
      description: 'Sample material description...',
    },
    {
      id: 4,
      name: 'Recycled Material 4',
      description: 'Sample material description...',
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Recycled Materials Marketplace</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {materials.map((material) => (
          <RecycledMaterialCard key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;