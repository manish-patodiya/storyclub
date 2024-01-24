import { Button, Col, Row, Image, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import divider1 from "../img/divider1.png";

const Home = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <h1 className="d-flex justify-content-center fw-700">
          Real People, Real Stories!
        </h1>
      </Row>
      <div className="mt-4 d-flex justify-content-center">
        <Image src={divider1} />
      </div>
      <Row className="my-4">
        <h3 style={{ textAlignLast: "center" }}>
          Everybody has a Story to Tell...
        </h3>
      </Row>
      <div className="d-flex justify-content-center">
        <Button
          size="lg"
          variant="outline-maroon px-5 me-2 text-dark rounded-pill fw-700"
        >
          What's yours?
        </Button>
      </div>
      <Row className="mt-5 justify-content-center">
        <div className="row w-50">
          <Col
            className="d-flex justify-content-between align-items-center mx-2 "
            style={{ borderBottom: "2px solid", borderColor: "#d4635b" }}
          >
            <span style={{ fontSize: "20px" }}>Featured Audios</span>
            <FaArrowRight style={{ fontSize: "20px" }} />
          </Col>
          <Col
            className="d-flex justify-content-between align-items-center mx-2 "
            style={{ borderBottom: "2px solid", borderColor: "#d4635b" }}
          >
            <span style={{ fontSize: "20px" }}>Featured Audios</span>{" "}
            <FaArrowRight style={{ fontSize: "20px" }} />
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default Home;
