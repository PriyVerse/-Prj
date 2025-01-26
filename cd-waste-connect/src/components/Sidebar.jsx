import React from 'react'

function Sidebar({ activeSection, setActiveSection }) {
  const menuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: '📊' 
    },
    { 
      id: 'waste-categorization', 
      label: 'Waste Categorization', 
      icon: '♻️' 
    },
    { 
      id: 'recycling-marketplace', 
      label: 'Recycling Marketplace', 
      icon: '🏗️' 
    },
    { 
      id: 'environmental-impact', 
      label: 'Environmental Impact', 
      icon: '🌍' 
    },
    { 
      id: 'compliance', 
      label: 'Compliance', 
      icon: '📋' 
    }
  ]

  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>C&D Waste Connect</h1>
      </div>
      <nav>
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar