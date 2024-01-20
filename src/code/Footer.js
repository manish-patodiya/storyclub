import { Button, Row, Image } from "react-bootstrap";
import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import divider3 from "../img/divider3.png";
import background from "../img/foot-background.png";
import mentons from "../img/mentons.png";

const Footer = () => {
  return (
    <div className="p-5" style={{ backgroundImage: `url(${background})` }}>
      <div className="d-flex justify-content-center">
        <Image src={mentons} />
      </div>
      <div className="mt-4 d-flex justify-content-center">
        <img src={divider3} />
      </div>
      <Row>
        <p className="px-5 py-3 text-white" style={{ textAlignLast: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </Row>
      <div className="d-flex justify-content-center">
        <Button variant="danger me-1 text-dark border-white">
          <Facebook style={{ fontSize: 20 }} />
        </Button>
        <Button variant="danger me-1 text-dark border-white">
          <Instagram style={{ fontSize: 20 }} />
        </Button>
        <Button variant="danger me-1 text-dark border-white">
          <Linkedin style={{ fontSize: 20 }} />
        </Button>
        <Button variant="danger me-1 text-dark border-white">
          <Twitter style={{ fontSize: 20 }} />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
