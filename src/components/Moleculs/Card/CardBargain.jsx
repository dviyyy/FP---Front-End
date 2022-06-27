import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Card,
  Button,
  Modal
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalModals from '../Modal/Modal'
import './Card.Module.css';

function Product() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Container>
        <Card className='card-bargain'>
          <Card.Body>
            <h5 style={{ fontWeight: 'bold' }}>Jam Tangan Casio</h5>
            <p style={{ color: 'grey' }}>Aksesoris</p>
            <p>Rp.250.000</p>
            <Row>
              <VerticalModals
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
export default Product;