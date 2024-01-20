import { Button, Row, Image, Container } from "react-bootstrap";
import kids from "../img/kids.png";
import divider1 from "../img/divider1.png";

const Indroduction = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <h1
          style={{ fontWeight: 700 }}
          className="d-flex justify-content-center"
        >
          Real People, Real Stories!
        </h1>
      </Row>
      <div className="mt-4 d-flex justify-content-center">
        <Image src={divider1} />
      </div>
      <Row>
        <p className="pt-4" style={{ textAlignLast: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Row>
      <div className="d-flex justify-content-center">
        <Button variant="danger me-2 text-dark" style={{ fontWeight: 800 }}>
          Kids
        </Button>
        <Button variant="warning me-2" style={{ fontWeight: 400 }}>
          Teeanagers
        </Button>
        <Button variant="danger me-2 text-dark" style={{ fontWeight: 800 }}>
          Adults
        </Button>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <img src={kids} width={600} />
      </div>
    </Container>
  );
};

export default Indroduction;
