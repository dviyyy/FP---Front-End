/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container, Card, Row, Col, Button,
} from 'react-bootstrap';
import {
  FaWhatsapp,
} from 'react-icons/fa';
import VerticalModals from '../Modal/ModalStatus';
import Title from '../../Atoms/Title/Title';
import './Card.Module.css';

function CardHistory(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const {
    title, name, price, image, imageAlt, offering,
  } = props;

  return (
    <Container>
      <Title title="Daftar Produkmu Yang Ditawar" />
      <Card className="card-items-offering" style={{ borderRadius: '16px' }}>
        <Row>
          <Col xs={3}>
            <Card.Img src={image} className="mt-4 card-img-top image-accept-offering" alt={imageAlt} style={{ borderRadius: '16px' }} />
          </Col>
          <Col xs={9}>
            <Card.Body>
              <Card.Title style={{ fontSize: '10px', color: 'grey' }}>{title}</Card.Title>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{price}</Card.Text>
              <Card.Text>{offering}</Card.Text>
            </Card.Body>
          </Col>
          <div className="justify-content-end button-align">
            <VerticalModals
              show={modalShow}
              onHide={() => { return setModalShow(false); }}
            />
            <Button variant="secondary" className="button-accept">
              Hubungi di
              {' '}
              <FaWhatsapp />
            </Button>
          </div>
        </Row>
      </Card>
    </Container>
  );
}

export default CardHistory;
