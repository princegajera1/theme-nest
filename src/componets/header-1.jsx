import { useState } from "react";
import { FaArrowRight, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      {/* Top Banner */}
      <div className="bg-[#6039ff] text-white text-center py-2 px-4 flex items-center justify-center">
        <p className="m-0 flex items-center justify-center flex-wrap text-sm md:text-base">
          <span className="font-bold mr-2">Ready to launch?</span>
          <span className="font-normal opacity-90">
            Free installation on all theme purchases this week!
          </span>
          <FaArrowRight className="ml-3 hidden md:block" size={14} />
        </p>
      </div>

      {/* Navbar */}
      <nav className=" sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold flex items-center tracking-tight">
            <span className="text-[#6039ff]">Theme</span>
            <span>Nest.ai</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-[15px] font-medium text-gray-600">
            <a href="#" className="text-[#6039ff]">Home</a>
            <a href="#" className="hover:text-[#6039ff] transition">About Us</a>
            <a href="#" className="hover:text-[#6039ff] transition">Blog</a>
            
            {/* Mega Menu Trigger */}
            <div 
              className="relative py-7 cursor-pointer"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <div className="flex items-center hover:text-[#6039ff] transition">
                Products <FaChevronDown className={`ml-1.5 text-[10px] transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </div>

              {isProductsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white shadow-2xl rounded-2xl border p-8 grid grid-cols-3 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-6">
                    <ProductItem title="RideNDrop" desc="Ride sharing & delivery." color="bg-pink-100" />
                    <ProductItem title="ShopSwift" desc="eCommerce solution." color="bg-green-100" />
                  </div>
                  <div className="space-y-6">
                    <ProductItem title="BizFlow" desc="Business management." color="bg-blue-100" />
                    <ProductItem title="WorkHive" desc="Collaboration tool." color="bg-red-100" />
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-5 text-center">
                    <h4 className="text-indigo-900 font-bold mb-1">Big Bundle</h4>
                    <p className="text-xs text-gray-500 mb-3">Save extra 30% OFF</p>
                    <button className="bg-[#6039ff] text-white px-4 py-2 rounded-lg text-sm font-bold w-full">Buy Now</button>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-[#6039ff] transition">Services</a>
            <a href="#" className="hover:text-[#6039ff] transition">Contact Us</a>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden xl:block text-gray-600 font-medium text-sm hover:text-[#6039ff]">Login / Register</a>
            <button className="hidden md:block bg-[#6039ff] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#4f2ee0] transition shadow-md shadow-purple-100">
              Contact Us
            </button>
            <button 
              className="lg:hidden text-2xl text-[#6039ff]" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t p-6 space-y-4 shadow-xl">
            <a href="#" className="block font-semibold">Home</a>
            <a href="#" className="block font-semibold">Products</a>
            <a href="#" className="block font-semibold">About Us</a>
            <a href="#" className="block font-semibold">Contact Us</a>
            <button className="w-full bg-[#6039ff] text-white py-3 rounded-xl font-bold">Contact Us</button>
          </div>
        )}
      </nav>

      {/* Hero Section - Padding Bottom ઓછું કર્યું (pb-8) */}
      <section className="relative overflow-hidden pt-16 pb-8 px-6">
        <div className="absolute inset-0 z-0 opacity-40" 
             style={{ backgroundImage: 'radial-gradient(#6039ff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-5 py-2 rounded-full border border-purple-200 bg-purple-50 text-[#6039ff] text-sm font-semibold mb-8">
            Trusted by Creators & Businesses
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] mb-8">
            <span className="text-[#6039ff]">Build Smarter</span> with Ready-to-Use Products
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover ready-made digital products designed to save time, 
            cut costs, and help your business launch faster.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            <div className="relative w-full md:flex-1">
              <input 
                type="text" 
                placeholder="Search all products (e.g. Business, Portfolio)" 
                className="w-full px-6 py-4 rounded-2xl border-2 border-purple-100 bg-purple-50/50 focus:outline-none focus:border-[#6039ff] transition"
              />
            </div>
            <button className="w-full md:w-auto bg-[#6039ff] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all whitespace-nowrap">
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductItem({ title, desc, color }) {
  return (
    <div className="flex items-start space-x-3 cursor-pointer group">
      <div className={`w-10 h-10 rounded-lg ${color} flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition`}>
        <span className="text-lg">📦</span>
      </div>
      <div>
        <h5 className="font-bold text-gray-900 group-hover:text-[#6039ff] text-sm">{title}</h5>
        <p className="text-xs text-gray-500 leading-tight">{desc}</p>
      </div>
    </div>
  );
}

export default App;