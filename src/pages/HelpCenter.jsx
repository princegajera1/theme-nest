import Header from "../componets/Header";
import Footer from "../componets/Footer";

const HelpCenter = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Help <span className="text-[#6039ff]">Center</span></h1>
          <p className="text-xl text-gray-500 mb-10">How can we help you today?</p>
          <div className="max-w-2xl mx-auto mb-12">
            <input 
              type="text" 
              placeholder="Search for articles, tutorials, etc..." 
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all text-lg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 border border-gray-100 rounded-2xl hover:border-[#6039ff] hover:shadow-lg transition-all cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-gray-500">Learn how to setup and install your new templates.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl hover:border-[#6039ff] hover:shadow-lg transition-all cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Account & Billing</h3>
              <p className="text-gray-500">Manage your subscription and billing details.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl hover:border-[#6039ff] hover:shadow-lg transition-all cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customization</h3>
              <p className="text-gray-500">Guides on how to customize components and styling.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl hover:border-[#6039ff] hover:shadow-lg transition-all cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Troubleshooting</h3>
              <p className="text-gray-500">Fix common errors and deployment issues.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
