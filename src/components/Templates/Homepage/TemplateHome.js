import { Container } from 'react-bootstrap';
import NavbarHeader from '../../Organisms/Navbar/NavbarHeader';
import Home from '../../Organisms/Homepage/Home';

function TemplateHome({ product, notif, data }) {
  console.log(product, notif, data);
  return (
    <>
      <NavbarHeader notif={notif} />
      <Container fluid>
        <Home productAll={product} data={data} />
      </Container>
    </>
  );
}

export default TemplateHome;
