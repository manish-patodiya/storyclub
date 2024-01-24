import logo from "../img/logo.png";
import { useState } from "react";
import { Row, Col, Button, Image, Container } from "react-bootstrap";
import { Sliders2 } from "react-bootstrap-icons";
import MenuList from "./MenuList";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container className="pt-4">
      <Row className="justify-content-between bg-white align-item-center">
        <Col className="d-flex align-items-center"></Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Image src={logo} width={200} />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <Button variant="outline-maroon me-2 rounded-pill">
            Become a Member
          </Button>

          <Button
            variant="maroon rounded-circle"
            onClick={() => setModalShow(true)}
          >
            <Sliders2 />
          </Button>

          <MenuList show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
