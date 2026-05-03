import { FaCheck } from "react-icons/fa";

// IMAGE IMPORTS (Tamara path mujab change kari sako)
import img1 from "../assets/Rectangle-9.png";   
import img2 from "../assets/Rectangle-6-1.png"; 
import img3 from "../assets/Rectangle-7.png";   
import img4 from "../assets/Rectangle-8-1.png"; 

const Hero1 = () => {
  return (
    <section className="pt-16 pb-16 relative overflow-hidden bg-[#faf9ff]">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#6039ff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6039ff] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-[#ff39b0] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* NEW HERO TEXT SECTION */}
        <div className="text-center mb-16 px-6 max-w-4xl mx-auto pt-4">
          <div className="border border-[#6039ff]/30 text-[#6039ff] rounded-full px-5 py-1.5 text-[13px] font-medium inline-block mb-6 bg-white/50 backdrop-blur-sm">
            Trusted by Creators & Businesses
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.2]">
            <span className="text-[#6039ff]">Build Smarter</span> with Ready-<br className="hidden md:block" />to-Use Products
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Discover ready-made digital products designed to save time, cut costs, and help your business launch faster.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-[550px] mx-auto gap-3 justify-center items-center mb-6">
            <input 
              type="text" 
              placeholder="Search all products (e.g. Business, Portfolio)" 
              className="w-full sm:flex-1 px-5 py-3.5 rounded-xl border border-[#6039ff]/40 bg-[#F9F9FF] focus:bg-white focus:outline-none focus:border-[#6039ff] focus:ring-1 focus:ring-[#6039ff] transition-all text-gray-700 placeholder-gray-500 font-normal shadow-sm text-[15px]" 
            />
            <button className="w-full sm:w-auto bg-[#6039ff] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#502ce0] transition-colors shadow-lg shadow-[#6039ff]/30 whitespace-nowrap text-[15px] cursor-pointer">
              Browse Products
            </button>
          </div>

          {/* Popular Categories (Pills) */}
          <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto mb-4">
            <span className="px-5 py-2.5 bg-[#f5f3ff] text-[#1e1b4b] rounded-full text-sm font-bold cursor-pointer hover:bg-[#ede9ff] transition-colors">Admin Panel</span>
            <span className="px-5 py-2.5 bg-[#f5f3ff] text-[#1e1b4b] rounded-full text-sm font-bold cursor-pointer hover:bg-[#ede9ff] transition-colors">User App</span>
            <span className="px-5 py-2.5 bg-[#f5f3ff] text-[#1e1b4b] rounded-full text-sm font-bold cursor-pointer hover:bg-[#ede9ff] transition-colors">Driver App</span>
            <span className="px-5 py-2.5 bg-[#f5f3ff] text-[#1e1b4b] rounded-full text-sm font-bold cursor-pointer hover:bg-[#ede9ff] transition-colors">Business Website</span>
          </div>
        </div>

        {/* MAIN GRID: Laptop ma 3 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
          
          {/* SECTION 1: Left Tall Image */}
          <div className="lg:col-span-1 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
            <img src={img1} alt="Product 1" className="w-full h-auto block" />
          </div>

          {/* SECTION 2: Middle - Text (Top) + 2 Images Grid (Bottom) */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-full justify-end">
            
            {/* 3 Text Points Row - Photo mujab styling */}
            <div className="flex flex-row justify-between items-center px-4 mb-2">
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#6039ff] text-[12px] stroke-[3]" />
                <span className="text-[13px] md:text-[15px] font-extrabold tracking-tight text-gray-800 whitespace-nowrap">
                  Quick Installation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#6039ff] text-[12px] stroke-[3]" />
                <span className="text-[13px] md:text-[15px] font-extrabold tracking-tight text-gray-800 whitespace-nowrap">
                  Customisation Support
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#6039ff] text-[12px] stroke-[3]" />
                <span className="text-[13px] md:text-[15px] font-extrabold tracking-tight text-gray-800 whitespace-nowrap">
                  Ongoing Maintenance
                </span>
              </div>
            </div>

            {/* 2 Images Grid in Middle Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                <img src={img2} alt="Product 2" className="w-full h-auto block" />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                <img src={img3} alt="Product 3" className="w-full h-auto block" />
              </div>
            </div>
          </div>

          {/* SECTION 3: Right Tall Image */}
          <div className="lg:col-span-1 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:scale-[1.03]">
            <img src={img4} alt="Product 4" className="w-full h-auto block" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero1;