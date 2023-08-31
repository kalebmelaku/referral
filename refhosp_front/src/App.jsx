import { Routes, Route } from "react-router-dom";
import About from "./path/about";
import Home from "./path/home";
import Ward from "./path/ward";
import Portfolio from "./path/portfolio";
import Research from "./path/research";
import Library from "./path/library";
import Academic from "./path/academic";
import Services from "./path/services";
import ServiceDesc from "./path/serviceDesc";
import Bids from "./path/bids";
import Blogs from "./path/blogs";
import Tips from "./path/tips";
import Donate from "./path/donate";
import Contact from "./path/contact";
import DashBoard from "./dashboard/dashboard";
import ResearchUpload from "./dashboard/research";
import Login from "./path/login";
import Appointment from "./path/appointment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ward" element={<Ward />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/research" element={<Research />} />
        <Route path="/library" element={<Library />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/services" element={<Services />} />
        <Route path="/serviceDesc" element={<ServiceDesc />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/researchupload" element={<ResearchUpload />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </>
  );
}

export default App;
