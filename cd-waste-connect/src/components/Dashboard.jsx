import React from 'react'

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Waste Management Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card total-waste">
          <h3>Total Waste Processed</h3>
          <p>1,254 tons</p>
        </div>
        <div className="dashboard-card recycling-rate">
          <h3>Recycling Rate</h3>
          <p>72.3%</p>
        </div>
        <div className="dashboard-card environmental-impact">
          <h3>CO2 Reduction</h3>
          <p>486 tons</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard