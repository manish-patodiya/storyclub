import { Badge, Row, Col, Image, Container, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import divider1 from "../img/divider1.png";

const Workshop = () => {
  let list = [
    {
      title: "Become a Story Presenter",
      color: "warning-light",
      icon: MdEditDocument,
    },
    {
      title: "Become a Story Teller",
      color: "primary",
      icon: MdEditDocument,
    },
    {
      title: "Start you own Talkshow",
      color: "dark",
      icon: MdEditDocument,
    },
    {
      title: "Become a Business Story Writer",
      color: "success",
      icon: MdEditDocument,
    },
  ];
  return (
    <div>
      <Row className="justify-content-center">
        <h1 className="d-flex justify-content-center fw-700">
          Join our Workshops to...
        </h1>
      </Row>
      <div className="mt-4 d-flex justify-content-center">
        <Image src={divider1} />
      </div>
      <Row className="p-5">
        <Col className="px-5">
          {list.map((l, k) => {
            return (
              <div className="d-flex align-items-center m-4" key={k}>
                <Badge bg="skin p-3 rounded-circle">
                  <MdEditDocument
                    style={{ fontSize: 30 }}
                    className={`text-${l.color}`}
                  />
                </Badge>
                <div
                  className="d-flex justify-content-between align-items-center w-100"
                  style={{
                    borderBottom: "2px solid",
                    borderColor: "#d4635b",
                  }}
                >
                  <span className="ps-2" style={{ fontSize: "20px" }}>
                    Become a Story Presenter
                  </span>
                  <FaArrowRight style={{ fontSize: "20px" }} />
                </div>
              </div>
            );
          })}
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Workshop;
