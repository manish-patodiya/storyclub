import logo from "../img/logo.png";
import { Button, Navbar, Image, Container } from "react-bootstrap";
import { Search, MenuApp } from "react-bootstrap-icons";

const Header = () => {
  return (
    <Container>
      <Navbar className="bg-skin justify-content-between bg-white">
        <Image src={logo} width={200} />
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
    </Container>
  );
};

export default Header;
