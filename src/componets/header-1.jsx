import { useState } from "react";
import { 
  FaArrowRight, FaChevronDown, FaBars, FaTimes, 
  FaMotorcycle, FaShoppingCart, FaUtensils, 
  FaGraduationCap, FaPlusSquare, FaBriefcase, 
  FaProjectDiagram, FaCalendarAlt, FaHome, FaTruck, FaCheck 
} from "react-icons/fa";

function Header1() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  // Products Data Array
  const productList = [
    { icon: <FaMotorcycle className="text-pink-500"/>, title: "RideNDrop", color: "bg-pink-50" },
    { icon: <FaShoppingCart className="text-emerald-500"/>, title: "ShopSwift", color: "bg-emerald-50" },
    { icon: <FaUtensils className="text-orange-500"/>, title: "FoodiezHub", color: "bg-orange-50" },
    { icon: <FaGraduationCap className="text-blue-500"/>, title: "Edu Sphere", color: "bg-blue-50" },
    { icon: <FaPlusSquare className="text-indigo-500"/>, title: "Medicare+", color: "bg-indigo-50" },
    { icon: <FaBriefcase className="text-blue-600"/>, title: "BizFlow", color: "bg-blue-50" },
    { icon: <FaProjectDiagram className="text-orange-600"/>, title: "WorkHive", color: "bg-orange-50" },
    { icon: <FaCalendarAlt className="text-pink-600"/>, title: "Eventora", color: "bg-pink-50" },
    { icon: <FaHome className="text-green-600"/>, title: "HomeServe", color: "bg-green-50" },
    { icon: <FaTruck className="text-sky-600"/>, title: "Fleeton", color: "bg-sky-50" },
  ];

  return (
    <div className="bg-white font-sans text-[#1a1a1a]">
      {/* 1. TOP BANNER */}
      <div className="bg-[#6039ff] text-white text-center py-2.5 px-4 flex items-center justify-center relative z-[60]">
        <p className="m-0 flex items-center justify-center text-[12px] md:text-sm tracking-wide">
          <span className="font-bold mr-1">Ready to launch?</span>
          <span className="font-normal">Free installation on all theme purchases this week!</span>
          <FaArrowRight className="ml-2" size={10} />
        </p>
      </div>

      {/* 2. NAVBAR SECTION */}
      <nav className="sticky top-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl md:text-[34px] font-bold flex items-center tracking-tight cursor-pointer">
            <span className="text-[#6039ff]">Theme </span>
            <span className="text-[#1a1a1a]"> Nest.ai</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 text-[15px] font-semibold text-[#6b7280]">
            <a href="/" className="text-[#6039ff]">Home</a>
            <a href="/about-us" className="hover:text-[#6039ff] transition-colors">About Us</a>
            <a href="/blog" className="hover:text-[#6039ff] transition-colors">Blog</a>
            
            <div 
              className="relative py-7 cursor-pointer"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <div className="flex items-center hover:text-[#6039ff] transition-colors">
                Products <FaChevronDown className={`ml-1.5 text-[10px] transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </div>

              {isProductsOpen && (
                <div className="absolute top-full left-[-250px] w-[950px] bg-white shadow-2xl rounded-3xl border border-gray-100 p-8 grid grid-cols-12 gap-6 z-50">
                  <div className="col-span-4 space-y-5">
                    <ProductItem icon={<FaMotorcycle className="text-pink-500"/>} title="RideNDrop" desc="All-in-one ride sharing solution." color="bg-pink-50" />
                    <ProductItem icon={<FaShoppingCart className="text-emerald-500"/>} title="ShopSwift" desc="Ready-to-launch eCommerce app." color="bg-emerald-50" />
                    <ProductItem icon={<FaUtensils className="text-orange-500"/>} title="FoodiezHub" desc="Online food ordering platform." color="bg-orange-50" />
                    <ProductItem icon={<FaGraduationCap className="text-blue-500"/>} title="Edu Sphere" desc="Complete e-learning system." color="bg-blue-50" />
                  </div>
                  <div className="col-span-4 space-y-5">
                    <ProductItem icon={<FaBriefcase className="text-blue-600"/>} title="BizFlow" desc="Business management software." color="bg-blue-50" />
                    <ProductItem icon={<FaProjectDiagram className="text-orange-600"/>} title="WorkHive" desc="Team collaboration tool." color="bg-orange-50" />
                    <ProductItem icon={<FaCalendarAlt className="text-pink-600"/>} title="Eventora" desc="Event booking management." color="bg-pink-50" />
                    <ProductItem icon={<FaHome className="text-green-600"/>} title="HomeServe" desc="On-demand home services app." color="bg-green-50" />
                  </div>
                  <div className="col-span-4 bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl p-6 text-center border border-sky-100">
                    <h4 className="text-sky-900 font-black text-xl italic uppercase tracking-tight">SUMMER Big Bundle</h4>
                    <p className="text-[12px] text-gray-600 font-medium mb-4">Hurry! Limited stock left ⏱️</p>
                    <button className="bg-[#00c2ff] text-white py-3 px-4 rounded-xl font-bold text-sm">Buy Now @ $49</button>
                  </div>
                </div>
              )}
            </div>

            <a href="/services" className="hover:text-[#6039ff] transition-colors">Services</a>
            <a href="/contact" className="hover:text-[#6039ff] transition-colors">Contact Us</a>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-[#6039ff] text-white px-7 py-2.5 rounded-xl font-bold">Contact Us</button>
            <button className="lg:hidden text-2xl text-[#6039ff]" onClick={() => setIsMobileMenuOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>

        {/* 3. MOBILE MENU WITH PRODUCTS ACCORDION */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] h-screen w-screen flex justify-end">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className="relative w-[85%] max-w-[320px] bg-white h-full shadow-2xl p-8 flex flex-col overflow-y-auto">
              <button className="self-end text-3xl text-[#6039ff] mb-10" onClick={() => setIsMobileMenuOpen(false)}>
                <FaTimes />
              </button>
              
              <div className="space-y-6 flex-grow">
                <a href="/" className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]">Home</a>
                <a href="/about-us" className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]">About Us</a>
                
                {/* Mobile Products Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className={`flex items-center justify-between w-full text-lg font-bold transition-colors ${isMobileProductsOpen ? 'text-[#6039ff]' : 'text-gray-500'}`}
                  >
                    <span>Products</span>
                    <FaChevronDown className={`text-xs transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMobileProductsOpen && (
                    <div className="mt-4 grid grid-cols-1 gap-4 pl-2 animate-in slide-in-from-top-2 duration-200">
                      {productList.map((prod, idx) => (
                        <div key={idx} className="flex items-center gap-3 cursor-pointer">
                          <div className={`w-8 h-8 rounded-lg ${prod.color} flex items-center justify-center text-sm`}>
                            {prod.icon}
                          </div>
                          <span className="text-[14px] font-semibold text-gray-600">{prod.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/blog" className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]">Blog</a>
                <a href="/services" className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]">Services</a>
                <a href="/contact" className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]">Contact Us</a>
              </div>
              
              <div className="pt-8 mt-auto">
                <button className="w-full bg-[#6039ff] text-white py-4 rounded-2xl font-bold text-lg">
                    Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-4 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.12]" 
             style={{ backgroundImage: 'radial-gradient(#6039ff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
         <div className="inline-block px-6 py-2 rounded-full border border-[#6039ff]/30 bg-purple-50/50 text-[#6039ff] text-[13px] font-bold mb-10 shadow-sm cursor-pointer hover:bg-[#6039ff] hover:text-white hover:scale-105 hover:shadow-md transition-all duration-300">
  Trusted by Creators & Businesses
</div>

         <h1 className="text-[42px] md:text-[60px] font-[500] text-[#1a1a1a] leading-[1.1] mb-8 tracking-tighter max-w-4xl mx-auto">
  <span className="text-[#6039ff]">Build Smarter</span> with Ready-to-
  <br className="hidden md:block" />
  Use Products
</h1>

          <p className="text-[#6b7280] text-base md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Discover ready-made digital products designed to save time, cut costs, and help your business launch faster.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-3xl mx-auto mb-6">
            <input 
              type="text" 
              placeholder="Search all products(e.g. Business,Portfolio,Education)..." 
              className="w-full px-6 py-4 rounded-2xl border-2 border-purple-100 bg-[#f3f0ff]/40 focus:outline-none focus:border-[#6039ff] transition-all"
            />
            <button className="cursor-pointer w-full md:w-auto bg-[#6039ff] text-white px-7 py-2 rounded-2xl font-bold text-lg">
              Browse Products
            </button>
          </div>

        
        </div>
      </section>
    </div>
  );
}

function ProductItem({ icon, title, desc, color }) {
  return (
    <div className="flex items-start space-x-4 cursor-pointer group text-left">
      <div className={`w-11 h-11 rounded-2xl ${color} flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-gray-900 group-hover:text-[#6039ff] text-[15px] mb-0.5">{title}</h5>
        <p className="text-[12px] text-gray-500 leading-tight font-medium">{desc}</p>
      </div>
    </div>
  );
}

function FeatureTick({ text }) {
    return (
      <div className="flex items-center gap-2.5 text-[#6039ff] font-bold text-sm md:text-base">
        <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
            <FaCheck className="text-[10px]" />
        </div>
        <span className="text-gray-700">{text}</span>
      </div>
    );
}

export default Header1;