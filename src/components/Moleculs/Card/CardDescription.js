import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardDescription({ productById }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="card-desc" style={{ borderRadius: '16px' }}>
            <Card.Body>
              <h5 style={{ fontWeight: 'bold' }}>Deskripsi</h5>
              <p>
                {productById.description}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default CardDescription;
