import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering <span className="text-[#6039ff]">Creators</span> worldwide
              </h1>
              <p className="text-base md:text-lg text-gray-500 mb-8 font-normal leading-relaxed">
                We believe that building a beautiful, high-performance website shouldn't require months of development. Theme Nest is built to provide ready-to-launch solutions for modern businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#00c2ff] text-xl" />
                  <span className="text-gray-700 font-medium text-base">Pixel-perfect Designs</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#00c2ff] text-xl" />
                  <span className="text-gray-700 font-medium text-base">Highly Customizable</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#00c2ff] text-xl" />
                  <span className="text-gray-700 font-medium text-base">Optimized for Performance</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6039ff] to-[#00c2ff] rounded-[40px] transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="rounded-[40px] relative z-10 shadow-2xl object-cover h-[500px] w-full" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#6039ff] py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">10k+</h3>
              <p className="text-[#00c2ff] font-medium text-sm">Active Users</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
              <p className="text-[#00c2ff] font-medium text-sm">Premium Themes</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">99%</h3>
              <p className="text-[#00c2ff] font-medium text-sm">Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-[#00c2ff] font-medium text-sm">Expert Support</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
