import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/ContactPage";
import Gallery from "./pages/Gallery/GalleryPage";
import "./App.css";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Switch> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        {/* </Switch> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
