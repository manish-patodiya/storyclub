import { FaArrowRight } from "react-icons/fa";
import { Button, Modal, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

function MenuList(props) {
  const [path, setPath] = useState(window.location.pathname);
  let menuList = [
    { title: "Home", url: "/storyclub/home" },
    { title: "Stories", url: "/storyclub/stories" },
    { title: "StoryWriter", url: "/storyclub/story-writer" },
    { title: "StoryTeller", url: "/storyclub/story-teller" },
    { title: "Workshop", url: "/storyclub/workshop" },
    { title: "MemberShip", url: "/storyclub/membership" },
    { title: "About StoryClub", url: "/storyclub/about" },
    { title: "Contact us", url: "/storyclub/contact" },
  ];
  return (
    <Modal
      {...props}
      className="right"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="bg-maroon">
        <div className="d-flex justify-content-end mb-4 pointer">
          <IoIosCloseCircle
            className="text-white"
            style={{ fontSize: "25px" }}
            onClick={props.onHide}
          />
        </div>
        {menuList.map((menu, key) => {
          return (
            <Row key={key}>
              <Link
                to={menu.url}
                relative="path"
                onClick={() => {
                  props.onHide();
                  setPath(menu.url);
                }}
                className="fw-700 text-dark"
              >
                <Col
                  className={`d-flex justify-content-between align-items-center mx-2 text-dark mb-4 menu ${
                    path == menu.url ? "active" : ""
                  }`}
                  style={{
                    borderBottom: "2px solid",
                    borderColor: "#fff",
                    fontSize: "25px",
                  }}
                >
                  {menu.title}
                  <FaArrowRight />
                </Col>
              </Link>
            </Row>
          );
        })}
      </Modal.Body>
    </Modal>
  );
}
export default MenuList;
