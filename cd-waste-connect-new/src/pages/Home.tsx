import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Welcome to C&D Waste Connect</h2>
        <p style={{ color: '#4b5563' }}>Your smart construction waste management platform.</p>
      </main>
    </div>
  );
};

export default Home;