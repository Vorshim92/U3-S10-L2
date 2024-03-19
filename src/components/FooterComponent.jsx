import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container fluid className="bg-light text-black">
      <Row className="py-5">
        <Col xs={3} md={3} lg={3} xl={3}>
          Contattaci
        </Col>
        <Col xs={3} md={3} lg={3} xl={3}>
          EMAIL
        </Col>
        <Col xs={3} md={3} lg={3} xl={3}>
          Tutti i diritti sono riservati
        </Col>
        <Col xs={3} md={3} lg={3} xl={3}>
          <span>© 2024 VORSHIM</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
