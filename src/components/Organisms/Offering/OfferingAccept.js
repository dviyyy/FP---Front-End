import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import CardAcceptOffering from '../../Moleculs/Card/CardAcceptOffering';
import CardSellerOffering from '../../Moleculs/Card/CardSellerOffering';
// import './Input.Module.css';

function OfferingInfo() {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <div style={{ paddingTop: '30px' }}>
            <Link to="/side" style={{ color: 'black' }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
        </Col>
        <Col md={10}>
          <CardSellerOffering />
          <CardAcceptOffering
            title="Penawaran Produk"
            name="Jam Tangan Casio"
            price="Rp 250.000"
            offering="Ditawar Rp.200.000"
            image="https://placeimg.com/165/100/any"
            imageAlt="Gambar jam tangan"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default OfferingInfo;
