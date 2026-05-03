import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Product from "../componets/Product";

const ProductsPage = () => {
  return (
    <>
      <Header />

      <div className="bg-[#F9F9FF] min-h-screen pt-20">
        <div className="text-center mb-8 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our <span className="text-[#6039ff]">Products</span></h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Discover our premium range of ready-to-use applications and themes.</p>
        </div>

        {/* Existing Products Component */}
        <Product />
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
