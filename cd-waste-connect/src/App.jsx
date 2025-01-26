import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import WasteCategorization from './components/WasteCategorization'
import RecyclingMarketplace from './components/RecyclingMarketplace'
import EnvironmentalImpact from './components/EnvironmentalImpact'
import ComplianceMonitoring from './components/ComplianceMonitoring'
import './styles/App.css'

function App() {
  const [activeSection, setActiveSection] = useState('dashboard')

  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard': 
        return <Dashboard />
      case 'waste-categorization': 
        return <WasteCategorization />
      case 'recycling-marketplace': 
        return <RecyclingMarketplace />
      case 'environmental-impact': 
        return <EnvironmentalImpact />
      case 'compliance': 
        return <ComplianceMonitoring />
      default: 
        return <Dashboard />
    }
  }

  return (
    <div className="app-container">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  )
}

export default App