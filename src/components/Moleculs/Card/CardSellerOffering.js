import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardSeller({ buyerInfo, buyerCity }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    window.addEventListener('resize', () => {
      const mobile = window.innerWidth < 600;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
      }
    }, false);
  }, [isMobile]);
  return (
    <Container>
      <Card className="mt-4 mb-5 seller-offering" style={{ borderRadius: '16px' }}>
        <Card.Body>
          <Row>
            <Col xs={3}>
              <img src={`${process.env.PUBLIC_URL}/images/seller_pic.png`} style={{ width: '80%' }} alt="" />
            </Col>
            <Col xs={9} className="pt-3">
              <h5 style={{ fontWeight: 'bold' }}>Safira</h5>
              <p>Jakarta</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardSeller;
