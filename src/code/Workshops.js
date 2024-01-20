import { Row, Col, Image, Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import frame from "../img/frame.png";
import divider3 from "../img/divider3.png";

const Workshops = () => {
  const cat = ["Kids", "Teenagers", "Adults"];
  return (
    <div className="bg-pink">
      <Container>
        <Row>
          <Col md={5}>
            <Row>
              <h1
                className="text-dark"
                style={{ fontWeight: 700, color: "black" }}
              >
                Workshops
              </h1>
            </Row>
            <div>
              <img src={divider3} />
            </div>
            <Row className="mt-3">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. For;
              </span>
              <span className="mt-5">For: </span>
            </Row>

            <Row className="mt-4">
              {cat.map((e, k) => {
                return (
                  <Row
                    className="mb-2"
                    style={{ fontWeight: 1000, color: "black" }}
                    key={k}
                  >
                    <div
                      className="d-flex justify-content-between w-75 py-2 align-items-center"
                      style={{
                        borderBottom: "1px solid",
                        borderColor: "white",
                      }}
                    >
                      <span style={{ fontSize: "20px" }}>{e}</span>{" "}
                      <ArrowRight style={{ fontSize: "20px" }} />
                    </div>
                  </Row>
                );
              })}
            </Row>
          </Col>
          <Col md={7}>
            <Image src={frame} width={"100%"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Workshops;
