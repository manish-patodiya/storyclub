import divider1 from "../img/divider1.png";
import { Row, Image, Container } from "react-bootstrap";

export const Reviews = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <h1
          style={{ fontWeight: 700 }}
          className="d-flex justify-content-center text-dark"
        >
          Reviews
        </h1>
      </Row>
      <div className="mt-4 d-flex justify-content-center">
        <Image src={divider1} />
      </div>
      <Row>
        <p className="py-4" style={{ textAlignLast: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Row>
    </Container>
  );
};

export default Reviews;
