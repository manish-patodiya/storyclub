import { Row, Col, Image, Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import mask from "../img/mask.png";
import divider1 from "../img/divider1.png";

const FeaturedStories = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Row>
            <h1 style={{ fontWeight: 700 }}> Featured Stories</h1>
          </Row>
          <div>
            <img src={divider1} />
          </div>
          <Row className="mt-4">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </span>
          </Row>

          <Row className="mt-5">
            <Col style={{ fontWeight: 800 }}>
              <div
                className="d-flex justify-content-between align-items-center w-75 py-2"
                style={{ borderBottom: "2px solid", borderColor: "#d4635b" }}
              >
                <span style={{ fontSize: "20px" }}>Featured Audios</span>
                <ArrowRight style={{ fontSize: "20px" }} />
              </div>
            </Col>
            <Col style={{ fontWeight: 800 }}>
              <div
                className="d-flex justify-content-between align-items-center w-75 py-2"
                style={{ borderBottom: "2px solid", borderColor: "#d4635b" }}
              >
                <span style={{ fontSize: "20px" }}>Featured Audios</span>{" "}
                <ArrowRight style={{ fontSize: "20px" }} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center">
          <Image src={mask} />
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedStories;
