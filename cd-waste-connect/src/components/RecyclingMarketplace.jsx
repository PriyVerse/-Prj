import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../styles/App.css';

function RecyclingMarketplace() {
  const [materials, setMaterials] = useState([
    { id: 1, name: 'Recycled Concrete', quantity: 50, price: 45, image: '/images/recycled-concrete.jpg' },
    { id: 2, name: 'Salvaged Steel', quantity: 25, price: 120, image: '/images/salvaged-steel.jpg' },
    { id: 3, name: 'Reclaimed Wood', quantity: 35, price: 75, image: '/images/reclaimed-wood.jpg' }
  ]);

  return (
    <div className="recycling-marketplace">
      <h2 className="mb-4">Recycling Marketplace</h2>
      <Row xs={1} md={3} className="g-4">
        {materials.map(material => (
          <Col key={material.id}>
            <Card className="h-100">
              <div className="material-image-container">
                <img src={material.image} alt={material.name} className="material-image" />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{material.name}</Card.Title>
                <div className="flex-grow-1">
                  <p>Quantity: {material.quantity} tons</p>
                  <p>Price: ${material.price} per ton</p>
                </div>
                <div className="d-flex justify-content-end">
                  <Button variant="primary" className="me-2">Buy</Button>
                  <Button variant="outline-primary">Details</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RecyclingMarketplace;