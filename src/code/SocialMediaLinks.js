import { Button, Row, Image } from "react-bootstrap";
import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";

const SocialMediaLinks = () => {
  return (
    <div
      className="d-flex justify-content-end align-items-end py-5"
      style={{
        height: "100%",
      }}
    >
      <Button variant="maroon py-2 rounded-circle me-2">
        <Facebook style={{ fontSize: 18 }} />
      </Button>
      <Button variant="maroon py-2 rounded-circle me-2">
        <Instagram style={{ fontSize: 18 }} />
      </Button>
      <Button variant="maroon py-2 rounded-circle me-2">
        <Youtube style={{ fontSize: 18 }} />
      </Button>
    </div>
  );
};

export default SocialMediaLinks;
