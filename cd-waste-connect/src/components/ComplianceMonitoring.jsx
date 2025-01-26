import React, { useState } from 'react'

function ComplianceMonitoring() {
  const [regulations, setRegulations] = useState([
    { 
      id: 1, 
      name: 'Waste Disposal Act', 
      status: 'Compliant', 
      lastChecked: '2024-01-15' 
    },
    { 
      id: 2, 
      name: 'Recycling Standards', 
      status: 'Partially Compliant', 
      lastChecked: '2024-01-10' 
    }
  ])

  return (
    <div className="compliance-monitoring">
      <h2>Regulatory Compliance</h2>
      <table>
        <thead>
          <tr>
            <th>Regulation</th>
            <th>Compliance Status</th>
            <th>Last Checked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {regulations.map(reg => (
            <tr key={reg.id}>
              <td>{reg.name}</td>
              <td>{reg.status}</td>
              <td>{reg.lastChecked}</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComplianceMonitoring