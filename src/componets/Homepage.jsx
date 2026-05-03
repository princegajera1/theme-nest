import Users from "./Users";
import Hero1 from "./Hero-1";
import Product from "./Product";
import Services from "./Services";
import Steps from "./Steps";
import SuccessStories from "./SuccessStories";
import FAQ from "./FAQ";
import Header from "./Header";
import Footer from "./Footer";
import Logos from "./Logos";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero1 />
      <Logos />
      <Product />
      <Steps />
      <Services />
      <SuccessStories />
      <Users />
      <FAQ />
      <Footer />
    </>
  );
};

export default Homepage;
