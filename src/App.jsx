import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About-us";
import Services from "./pages/Services/index";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact-us";
import BusinessConsulting from "./pages/Services/business-consulting";
import BusinessScaling from "./pages/Services/business-scaling";
import PanAfricanEcosystem from "./pages/Services/pan-african";
import TechIntegration from "./pages/Services/techIntegration";
import FinanceServices from "./pages/Services/finance";
import Training from "./pages/Services/training";
import RealEstate from "./pages/Services/realEstate";
import VentureServices from "./pages/Services/venture";
import CustomTechServices from "./pages/Services/customTech";
import ResearchServices from "./pages/Services/research";
import BrandingServices from "./pages/Services/branding";

const GeneralRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/blogDetails/:id" element={<BlogDetails />} /> */}
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/business-consulting"
            element={<BusinessConsulting />}
          />
          <Route
            path="/services/business-scaling"
            element={<BusinessScaling />}
          />
          <Route
            path="/services/pan-african-startup-ecosystem"
            element={<PanAfricanEcosystem />}
          />
          <Route
            path="/services/tech-integration"
            element={<TechIntegration />}
          />
          <Route
            path="/services/finance-services"
            element={<FinanceServices />}
          />
          <Route path="/services/training-services" element={<Training />} />
          <Route
            path="/services/real-estate-services"
            element={<RealEstate />}
          />
          <Route
            path="/services/venture-capital-services"
            element={<VentureServices />}
          />
          <Route
            path="/services/custom-tech-services"
            element={<CustomTechServices />}
          />
          <Route
            path="/services/research-services"
            element={<ResearchServices />}
          />
          <Route
            path="/services/branding-services"
            element={<BrandingServices />}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default GeneralRoute;
