//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//PAGES
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import FlightExperiences from "./pages/FlighExperiences";
import HotelsResorts from "./pages/HotelsResorts";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import PageBase from "./pages/PageBase";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route index element={<Home />}></Route>
            <Route path="/Destinations" element={<Destinations />}></Route>
            <Route
              path="/FlightExperiences"
              element={<FlightExperiences />}
            ></Route>
            <Route path="/HotelsResorts" element={<HotelsResorts />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
