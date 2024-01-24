import { Button, ButtonGroup } from "react-bootstrap";

const MenuBar = () => {
  return (
    <ButtonGroup className="mx-auto my-5">
      <Button variant="warning">Connect With Community </Button>
      <Button variant="warning">Start sharing your stories </Button>
      <Button variant="warning">Welcome the recognition </Button>
      <Button variant="warning">
        As you grow, join our featured profiles.
      </Button>
    </ButtonGroup>
  );
};

export default MenuBar;
