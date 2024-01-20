import "./App.css";
import { Container } from "react-bootstrap";
// import App from './App';
import Header from "./code/Header";
import Introduction from "./code/Introduction";
import FeaturedStories from "./code/FeaturedStories";
import Choice from "./code/Choice";
import Workshops from "./code/Workshops";
import Reviews from "./code/Reviews";
import Footer from "./code/Footer";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Choice />
      <FeaturedStories />
      <Workshops />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
