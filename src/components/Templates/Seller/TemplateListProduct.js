import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ListProduct from '../../Organisms/Seller/ListProduct';

function TemplateListProduct({ product, notif }) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ListProduct dataProducts={product} />
      </Container>
    </>
  );
}

export default TemplateListProduct;
