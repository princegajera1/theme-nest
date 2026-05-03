import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Services from "../componets/Services";

const Servicesp = () => {
  return (
    <>
      <Header />
      <div className="pt-20 bg-[#F9F9FF]">
        <div className="text-center mb-8 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our <span className="text-[#6039ff]">Services</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Explore everything we have to offer to make your business grow online.</p>
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default Servicesp;