import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CarouselProduct from '../../Moleculs/Carousel/CarouselProduct';
import CardProduct from '../../Moleculs/Card/CardProduct';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardDescription from '../../Moleculs/Card/CardDescription';
// import './Input.Module.css';

function ProductPage({
  productById, categoryName, productImage, seller, city,
}) {
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
    <Container className={`${isMobile ? 'mt-2' : 'mt-5'}`}>
      <Row>
        <Col md={6}>
          <CarouselProduct productImage={productImage} />
        </Col>
        <Col md={6}>
          <CardProduct productById={productById} categoryName={categoryName} />
          <CardSeller seller={seller} city={city} />
        </Col>
        <CardDescription productById={productById} />
      </Row>
    </Container>
  );
}

export default ProductPage;
