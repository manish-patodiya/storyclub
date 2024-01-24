import "./App.css";
import { Container } from "react-bootstrap";
// import App from './App';
import Header from "./code/Header";
import Introduction from "./code/Home";
import Home from "./code/Home";
import Choice from "./code/Choice";
import Workshop from "./code/Workshop";
import Reviews from "./code/Reviews";
import Footer from "./code/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialMediaLinks from "./code/SocialMediaLinks";
import MenuBar from "./code/MenuBar";
import StoryWriters from "./code/StoryWriters";

function App() {
  return (
    <Container
      className="d-flex justify-content-between flex-column"
      style={{ minHeight: "100vh" }}
    >
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            index
            path="/storyclub"
            element={[<MenuBar />, <Home />, <SocialMediaLinks />]}
          ></Route>
          <Route
            index
            path="/storyclub/home"
            element={[<MenuBar />, <Home />, <SocialMediaLinks />]}
          ></Route>
          <Route
            index
            path="/storyclub/story-writer "
            element={[<MenuBar />, <StoryWriters />, <SocialMediaLinks />]}
          ></Route>
          <Route
            index
            path="/storyclub/workshop"
            element={<Workshop />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
