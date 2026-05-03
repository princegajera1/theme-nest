import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaMotorcycle,
  FaShoppingCart,
  FaUtensils,
  FaGraduationCap,
  FaPlusSquare,
  FaBriefcase,
  FaProjectDiagram,
  FaCalendarAlt,
  FaHome,
  FaTruck,
} from "react-icons/fa";

function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Read current user from localStorage
  
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setIsUserMenuOpen(false);
    window.location.reload(); // Optional: Reload to clear state globally
  };

  const productList = [
    {
      icon: <FaMotorcycle className="text-pink-500" />,
      title: "RideNDrop",
      color: "bg-pink-50",
    },
    {
      icon: <FaShoppingCart className="text-emerald-500" />,
      title: "ShopSwift",
      color: "bg-emerald-50",
    },
    {
      icon: <FaUtensils className="text-orange-500" />,
      title: "FoodiezHub",
      color: "bg-orange-50",
    },
    {
      icon: <FaGraduationCap className="text-blue-500" />,
      title: "Edu Sphere",
      color: "bg-blue-50",
    },
    {
      icon: <FaPlusSquare className="text-indigo-500" />,
      title: "Medicare+",
      color: "bg-indigo-50",
    },
    {
      icon: <FaBriefcase className="text-blue-600" />,
      title: "BizFlow",
      color: "bg-blue-50",
    },
    {
      icon: <FaProjectDiagram className="text-orange-600" />,
      title: "WorkHive",
      color: "bg-orange-50",
    },
    {
      icon: <FaCalendarAlt className="text-pink-600" />,
      title: "Eventora",
      color: "bg-pink-50",
    },
    {
      icon: <FaHome className="text-green-600" />,
      title: "HomeServe",
      color: "bg-green-50",
    },
    {
      icon: <FaTruck className="text-sky-600" />,
      title: "Fleeton",
      color: "bg-sky-50",
    },
  ];

  return (
    <div className="bg-white font-sans text-[#1a1a1a]">
      {/* 1. TOP BANNER */}
      <div className="bg-[#6039ff] text-white text-center py-2.5 px-4 flex items-center justify-center relative z-[60]">
        <p className="m-0 flex items-center justify-center text-[12px] md:text-sm tracking-wide">
          <span className="font-bold mr-1">Ready to launch?</span>
          <span className="font-normal">
            Free installation on all theme purchases this week!
          </span>
          <FaArrowRight className="ml-2" size={10} />
        </p>
      </div>

      {/* 2. NAVBAR SECTION */}
      <nav className="sticky top-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl md:text-[30px] font-bold flex items-center tracking-tight cursor-pointer"
          >
            <span className="text-[#6039ff]">Theme</span>
            <span className="text-[#1a1a1a]">Nest.ai</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 text-[14px] font-medium text-[#6b7280]">
            <Link to="/" className="hover:text-[#6039ff] transition-colors">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#6039ff] transition-colors"
            >
              About Us
            </Link>
            <Link to="/blog" className="hover:text-[#6039ff] transition-colors">
              Blog
            </Link>

            <div
              className="relative py-7 cursor-pointer"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link to="/products" className="flex items-center hover:text-[#6039ff] transition-colors">
                Products{" "}
                <FaChevronDown
                  className={`ml-1.5 text-[10px] transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {isProductsOpen && (
                <div className="absolute top-full left-[-250px] w-[950px] bg-white shadow-2xl rounded-3xl border border-gray-100 p-8 grid grid-cols-12 gap-6 z-50">
                  <div className="col-span-4 space-y-5">
                    <ProductItem
                      icon={<FaMotorcycle className="text-pink-500" />}
                      title="RideNDrop"
                      desc="All-in-one ride sharing solution."
                      color="bg-pink-50"
                    />
                    <ProductItem
                      icon={<FaShoppingCart className="text-emerald-500" />}
                      title="ShopSwift"
                      desc="Ready-to-launch eCommerce app."
                      color="bg-emerald-50"
                    />
                    <ProductItem
                      icon={<FaUtensils className="text-orange-500" />}
                      title="FoodiezHub"
                      desc="Online food ordering platform."
                      color="bg-orange-50"
                    />
                    <ProductItem
                      icon={<FaGraduationCap className="text-blue-500" />}
                      title="Edu Sphere"
                      desc="Complete e-learning system."
                      color="bg-blue-50"
                    />
                  </div>
                  <div className="col-span-4 space-y-5">
                    <ProductItem
                      icon={<FaBriefcase className="text-blue-600" />}
                      title="BizFlow"
                      desc="Business management software."
                      color="bg-blue-50"
                    />
                    <ProductItem
                      icon={<FaProjectDiagram className="text-orange-600" />}
                      title="WorkHive"
                      desc="Team collaboration tool."
                      color="bg-orange-50"
                    />
                    <ProductItem
                      icon={<FaCalendarAlt className="text-pink-600" />}
                      title="Eventora"
                      desc="Event booking management."
                      color="bg-pink-50"
                    />
                    <ProductItem
                      icon={<FaHome className="text-green-600" />}
                      title="HomeServe"
                      desc="On-demand home services app."
                      color="bg-green-50"
                    />
                  </div>
                  <div className="col-span-4 bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl p-6 text-center border border-sky-100">
                    <h4 className="text-sky-900 font-black text-xl italic uppercase tracking-tight">
                      SUMMER Big Bundle
                    </h4>
                    <p className="text-[12px] text-gray-600 font-medium mb-4">
                      Hurry! Limited stock left ⏱️
                    </p>
                    <button className="bg-[#00c2ff] text-white py-3 px-4 rounded-xl font-bold text-sm">
                      Buy Now @ $49
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/service"
              className="hover:text-[#6039ff] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#6039ff] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center space-x-3 relative">
            {currentUser ? (
              <div className="relative hidden md:block">
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6039ff] to-[#a288ff] text-white flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  {currentUser.username ? currentUser.username[0].toUpperCase() : currentUser.email[0].toUpperCase()}
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-gray-50">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {currentUser.username || "User"}
                      </p>
                      <p className="text-[12px] text-gray-500 truncate">
                        {currentUser.email}
                      </p>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:block text-gray-700 hover:text-[#6039ff] px-4 py-2.5 font-medium transition-colors"
              >
                Login /Register
              </Link>
            )}

            <Link
              to="/contact"
              className="hidden md:block bg-[#6039ff] text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-[#6039ff]/20 hover:bg-[#502ce0] transition-colors"
            >
              Contact Us
            </Link>

            <button
              className="lg:hidden text-2xl text-[#6039ff] cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] h-screen w-screen flex justify-end">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="relative w-[85%] max-w-[320px] bg-white h-full shadow-2xl p-8 flex flex-col overflow-y-auto">
              <button
                className="self-end text-3xl text-[#6039ff] mb-10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes />
              </button>

              <div className="space-y-6 flex-grow">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]"
                >
                  About Us
                </Link>

                <div>
                  <button
                    onClick={() =>
                      setIsMobileProductsOpen(!isMobileProductsOpen)
                    }
                    className={`flex items-center justify-between w-full text-lg font-bold transition-colors ${isMobileProductsOpen ? "text-[#6039ff]" : "text-gray-500"}`}
                  >
                    <span>Products</span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${isMobileProductsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isMobileProductsOpen && (
                    <div className="mt-4 grid grid-cols-1 gap-4 pl-2">
                      {productList.map((prod, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg ${prod.color} flex items-center justify-center text-sm`}
                          >
                            {prod.icon}
                          </div>
                          <span className="text-[14px] font-semibold text-gray-600">
                            {prod.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]"
                >
                  Blog
                </Link>
                <Link
                  to="/service"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-500 hover:text-[#6039ff]"
                >
                  Contact Us
                </Link>
              </div>

              <div className="pt-8 mt-auto space-y-3">
                {currentUser ? (
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6039ff] to-[#a288ff] text-white flex items-center justify-center font-bold text-xl shadow-md">
                        {currentUser.username ? currentUser.username[0].toUpperCase() : currentUser.email[0].toUpperCase()}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-[15px] font-bold text-gray-800 truncate">
                          {currentUser.username || "User"}
                        </p>
                        <p className="text-[12px] text-gray-500 truncate">
                          {currentUser.email}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full border border-red-200 text-red-600 hover:bg-red-50 py-3 rounded-2xl font-bold text-[15px] text-center transition-colors cursor-pointer"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full border border-gray-200 text-gray-700 py-3 rounded-2xl font-bold text-[15px] text-center"
                  >
                    Login /Register
                  </Link>
                )}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-[#6039ff] text-white py-4 rounded-2xl font-bold text-[15px] text-center shadow-lg shadow-[#6039ff]/30"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

function ProductItem({ icon, title, desc, color }) {
  return (
    <div className="flex items-start space-x-4 cursor-pointer group text-left">
      <div
        className={`w-11 h-11 rounded-2xl ${color} flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-gray-900 group-hover:text-[#6039ff] text-[15px] mb-0.5">
          {title}
        </h5>
        <p className="text-[12px] text-gray-500 leading-tight font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Header;
