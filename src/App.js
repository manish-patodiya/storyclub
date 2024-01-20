import "./App.css";
import { Container } from "react-bootstrap";
// import App from './App';
import { Header, Card1, Card2, Card3 } from "./code/Header";

function App() {
  return (
    <Container fluid>
      <Header />
      <Card1 />
      <Card2 />
      <Card3 />
    </Container>
  );
}

export default App;
