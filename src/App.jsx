import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About-us";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact-us";

const GeneralRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
};

export default GeneralRoute;
