import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardSeller({ city, seller }) {
  return (
    <Container>
      <Card className="mt-4 mb-5 seller-card" style={{ borderRadius: '16px' }}>
        <Card.Body>
          <Row>
            <Col xs={2}>
              <img src={seller.photo} style={{ width: '100%' }} className="image-card-seller" alt="" />
            </Col>
            <Col xs={10}>
              <h5 style={{ fontWeight: 'bold' }}>{seller.name}</h5>
              <p>{city.name}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardSeller;
