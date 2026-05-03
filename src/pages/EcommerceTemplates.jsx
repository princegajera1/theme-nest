import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Product from "../componets/Product";

const EcommerceTemplates = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen pt-20">
        <div className="text-center mb-8 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">E-Commerce <span className="text-[#6039ff]">Templates</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">High-converting online store templates to skyrocket your digital sales.</p>
        </div>
        <Product />
      </div>
      <Footer />
    </>
  );
};

export default EcommerceTemplates;
