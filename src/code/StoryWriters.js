import { Button, Col, Row, Image, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import divider1 from "../img/divider1.png";

const StoryWriters = () => {
  return (
    <div>
      <Row className="justify-content-cente fw-1000r">
        <div className="d-flex flex-column align-items-center ">
          <h1>Connecting</h1>
          <h1>StoryWriters and StoryTellers!</h1>
        </div>
      </Row>
      <div className="mt-4 d-flex justify-content-center">
        <Image src={divider1} />
      </div>
      <Row className="m-5">
        <h6 style={{ textAlignLast: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h6>
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

export default StoryWriters;
