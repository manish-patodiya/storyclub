import "./App.css";
import { Container } from "react-bootstrap";
// import App from './App';
import { Header, Card1, Card2, Card3, Card4 } from "./code/Content";

function App() {
  return (
    <Container fluid>
      <Header />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </Container>
  );
}

export default App;
