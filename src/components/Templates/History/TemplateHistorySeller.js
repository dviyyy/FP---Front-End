import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import HistorySeller from '../../Organisms/History/HistorySeller';

function TemplateHistorySeller() {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <HistorySeller />
      </Container>
    </>
  );
}

export default TemplateHistorySeller;
