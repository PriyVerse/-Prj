import React from 'react'

function EnvironmentalImpact() {
  return (
    <div className="environmental-impact">
      <h2>Environmental Impact Tracker</h2>
      <div className="impact-metrics">
        <div className="metric">
          <h3>Carbon Emissions Avoided</h3>
          <p>486 tons CO2</p>
        </div>
        <div className="metric">
          <h3>Landfill Waste Reduction</h3>
          <p>65%</p>
        </div>
        <div className="metric">
          <h3>Energy Saved</h3>
          <p>1,200 MWh</p>
        </div>
      </div>
    </div>
  )
}

export default EnvironmentalImpact