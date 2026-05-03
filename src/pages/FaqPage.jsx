import Header from "../componets/Header";
import Footer from "../componets/Footer";
import FAQ from "../componets/FAQ";

const FaqPage = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen pt-20">
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default FaqPage;
