import React, { useState } from 'react'

function WasteCategorization() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [classification, setClassification] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    
    reader.onloadend = () => {
      setUploadedImage(reader.result)
      // Simulated AI classification
      setClassification({
        category: 'Concrete Waste',
        recyclability: 'High',
        recommendation: 'Suitable for road base material'
      })
    }
    
    reader.readAsDataURL(file)
  }

  return (
    <div className="waste-categorization">
      <h2>AI Waste Categorization</h2>
      <div className="upload-section">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload}
        />
        {uploadedImage && (
          <img 
            src={uploadedImage} 
            alt="Uploaded waste" 
            className="uploaded-image" 
          />
        )}
      </div>
      {classification && (
        <div className="classification-result">
          <h3>Classification Results</h3>
          <p>Category: {classification.category}</p>
          <p>Recyclability: {classification.recyclability}</p>
          <p>Recommendation: {classification.recommendation}</p>
        </div>
      )}
    </div>
  )
}

export default WasteCategorization