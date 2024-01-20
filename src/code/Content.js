import { Button, Row, Col, Navbar, Image } from "react-bootstrap";
import { Search, MenuApp, ArrowRight } from "react-bootstrap-icons";
import logo from "../img/logo.png";
import kids from "../img/kids.png";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import image5 from "../img/image5.png";
import mask from "../img/mask.png";
import frame from "../img/frame.png";
import divider1 from "../img/divider1.png";
import divider2 from "../img/divider2.png";
import divider3 from "../img/divider3.png";

export const Header = () => {
  return (
    <div className="">
      <Navbar className="bg-skin justify-content-between bg-white">
        <img src={logo} width={200}></img>
        <div>
          <Button variant="outline-danger" className="me-2">
            <Search />
          </Button>
          <Button variant="outline-danger" className="me-2">
            Sign Up
          </Button>
          <Button variant="outline-danger" className="me-2">
            <MenuApp />
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export const Card1 = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <h1
          style={{ fontWeight: 700 }}
          className="d-flex justify-content-center"
        >
          Real People, Real Stories!
        </h1>
      </Row>
      <div className="mt-4 d-flex justify-content-center">
        <img src={divider1} />
      </div>
      <Row className="p-5">
        <p style={{ textAlignLast: "center" }}>
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
    </div>
  );
};

export const Card2 = () => {
  let img = [image1, image2, image3, image4, image5];
  return (
    <div className="bg-pink">
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
        <p className="p-5" style={{ textAlignLast: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
    </div>
  );
};

export const Card3 = () => {
  return (
    <Row style={{ padding: "3rem" }}>
      <Col style={{ padding: "0 4rem" }}>
        <Row>
          <h1 style={{ fontWeight: 700 }}> Featured Stories</h1>
        </Row>
        <div>
          <img src={divider1} />
        </div>
        <Row className="mt-4">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
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
      <Col>
        <Image src={mask} />
      </Col>
    </Row>
  );
};

export const Card4 = () => {
  const cat = ["Kids", "Teenagers", "Adults"];
  return (
    <Row className="bg-pink" style={{ padding: "7rem" }}>
      <Col md={5} style={{ padding: "0 4rem" }}>
        <Row>
          <h1 className="text-dark" style={{ fontWeight: 700, color: "black" }}>
            Workshops
          </h1>
        </Row>
        <div>
          <img src={divider3} />
        </div>
        <Row className="mt-3">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. For;
          </span>
          <span className="mt-5">For: </span>
        </Row>

        <Row className="mt-4">
          {cat.map((e, k) => {
            return (
              <Row
                className="mb-2"
                style={{ fontWeight: 1000, color: "black" }}
              >
                <div
                  className="d-flex justify-content-between w-75 py-2 align-items-center"
                  style={{ borderBottom: "1px solid", borderColor: "white" }}
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
        <Image src={frame} width={700} />
      </Col>
    </Row>
  );
};
