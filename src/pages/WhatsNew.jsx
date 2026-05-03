import Header from "../componets/Header";
import Footer from "../componets/Footer";

const WhatsNew = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">What's <span className="text-[#6039ff]">New</span></h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Stay up to date with our latest template releases and feature updates.</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-[#6039ff] to-[#00c2ff] h-40 rounded-2xl flex items-center justify-center text-white font-black text-2xl p-6 text-center">
                  Vite + React Templates
                </div>
              </div>
              <div className="md:w-2/3">
                <span className="text-[#6039ff] font-bold text-sm tracking-widest uppercase mb-2 block">May 2026 Update</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">All new Vite 5 powered React Templates</h3>
                <p className="text-gray-500 font-medium">We've upgraded all our templates to utilize the lightning fast Vite 5 build tool, significantly improving development times and overall performance for all users.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-pink-500 to-orange-400 h-40 rounded-2xl flex items-center justify-center text-white font-black text-2xl p-6 text-center">
                  E-Commerce UI Kit
                </div>
              </div>
              <div className="md:w-2/3">
                <span className="text-[#6039ff] font-bold text-sm tracking-widest uppercase mb-2 block">April 2026 Update</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Introducing the E-Commerce UI Kit</h3>
                <p className="text-gray-500 font-medium">A massive collection of over 100+ new components specifically designed for building high-converting modern e-commerce stores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhatsNew;
