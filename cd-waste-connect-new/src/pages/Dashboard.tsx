import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Dashboard</h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/classify-waste">Classification</Link>
          </li>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/find-facilities">Facilities</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;