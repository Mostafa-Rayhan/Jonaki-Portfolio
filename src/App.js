import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Sem from "./pages/Services/Sem";
import Seo from "./pages/Services/Seo";
import Dms from "./pages/Services/Dms";
import Smm from "./pages/Services/Smm";
import Ems from "./pages/Services/Ems";
import Wd from "./pages/Services/Wd";
import Ym from "./pages/Services/Ym";
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
          <Route exact path="/about" element={<About />} />
          <Route exact path="/sem" element={<Sem />} />
          <Route exact path="/seo" element={<Seo />} />
          <Route exact path="/dms" element={<Dms />} />
          <Route exact path="/smm" element={<Smm />} />
          <Route exact path="/ems" element={<Ems />} />
          <Route exact path="/wd" element={<Wd />} />
          <Route exact path="/ym" element={<Ym />} />
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
