import { Button, Row, Col, Image, Container } from "react-bootstrap";
import divider2 from "../img/divider2.png";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import image5 from "../img/image5.png";

const Choice = () => {
  let img = [image1, image2, image3, image4, image5];
  return (
    <div className="bg-pink">
      <Container>
        <Row className="justify-content-center">
          <h1
            style={{ fontWeight: 700 }}
            className="d-flex justify-content-center text-dark"
          >
            Choice is Yours!
          </h1>
        </Row>
        <div className="mt-4 d-flex justify-content-center">
          <img src={divider2} />
        </div>
        <Row>
          <p className="pt-4" style={{ textAlignLast: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Row>
        <Row>
          <Col
            className="d-flex justify-content-center flex-wrap "
            style={{ borderRight: "2px solid" }}
          >
            {img.map((ele, k) => {
              return (
                <Image src={ele} className="m-1" key={k} rounded width={200} />
              );
            })}
          </Col>

          <Col className="d-flex justify-content-center flex-wrap">
            {img.map((ele, k) => {
              return (
                <Image src={ele} className="m-1" key={k} rounded width={200} />
              );
            })}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center flex-wrap ">
            <Button variant="warning">View More</Button>
          </Col>
          <Col className="d-flex justify-content-center flex-wrap ">
            <Button variant="warning">View More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Choice;
