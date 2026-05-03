import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";

import ScrollToTop from "./componets/ScrollToTop";
import About from "./pages/About";
import Homepage from "./componets/Homepage";
import Servicesp from "./pages/Servicesp";
import Blog from "./pages/Blog";
import ProductsPage from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicy from "./pages/PolicyPage";
import HelpCenter from "./pages/HelpCenter";
import WhatsNew from "./pages/WhatsNew";
import Recommendations from "./pages/Recommendations";
import FaqPage from "./pages/FaqPage";
import BusinessTemplates from "./pages/BusinessTemplates";
import EcommerceTemplates from "./pages/EcommerceTemplates";
import PortfolioTemplates from "./pages/PortfolioTemplates";
import EducationTemplates from "./pages/EducationTemplates";

const App = () => {
  // const location = useLocation(); // current URL path check karva mate

  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Homepage />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        <Route path="/service" element={<Servicesp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/business-templates" element={<BusinessTemplates />} />
        <Route path="/ecommerce-templates" element={<EcommerceTemplates />} />
        <Route path="/portfolio-templates" element={<PortfolioTemplates />} />
        <Route path="/education-templates" element={<EducationTemplates />} />
      </Routes>

      {/* {location.pathname !== "/about" && <Footer />} */}
    </>
  );
};

const RootApp = () => (
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);

export default RootApp;
