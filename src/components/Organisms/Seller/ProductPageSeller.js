import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CarouselProduct from '../../Moleculs/Carousel/CarouselProduct';
import CardProductBtn from '../../Moleculs/Card/CardProductBtn';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardDescription from '../../Moleculs/Card/CardDescription';
// import './Input.Module.css';

function ProductPageSeller({
  productById, categoryName, productImage, seller, city,
}) {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <CarouselProduct productImage={productImage} />
        </Col>
        <Col md={6}>
          <CardProductBtn productById={productById} categoryName={categoryName} />
          <CardSeller seller={seller} city={city} />
        </Col>
        <CardDescription productById={productById} />
      </Row>
    </Container>
  );
}

export default ProductPageSeller;
