import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import heroImg from "../assets/pop-up-img.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    
    // Retrieve users from localStorage (mock backend)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    const validUser = users.find(u => u.email === email && u.password === password);
    
    if (validUser) {
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      alert("Login successful!");
      navigate("/");
    } else {
      setError("Invalid email or password. Please try again or register.");
    }
  };

  return (
    <div className="min-h-screen bg-black/80 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#6039ff] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      {/* Modal Container */}
      <div className="w-full max-w-[1000px] bg-white rounded-[30px] shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10 min-h-[600px]">
        
        {/* Left Side: Images Grid */}
        <div className="hidden md:block md:w-1/2 bg-gray-100 relative">
          <img src={heroImg} alt="Templates Grid" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          {/* Close Button (X) */}
          <Link to="/" className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors border border-gray-200 border-dashed rounded p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>

          <div className="max-w-md mx-auto w-full">
            <Link to="/" className="text-2xl font-bold flex justify-center tracking-tight cursor-pointer mb-6">
              <span className="text-[#6039ff]">Theme</span>
              <span className="text-[#1a1a1a]">Nest.ai</span>
            </Link>
            
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
              Log in to your account
            </h2>
            <p className="text-center text-gray-500 mb-8 font-medium">
              Sign in and pick up right where you left off
            </p>

            {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium text-center">{error}</div>}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-[15px] font-semibold text-gray-700 mb-1.5">
                  Username or Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ff] focus:ring-1 focus:ring-[#6039ff] transition-all text-gray-800 placeholder-gray-400"
                  placeholder="Username or Email Address"
                />
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ff] focus:ring-1 focus:ring-[#6039ff] transition-all text-gray-800 placeholder-gray-400 pr-12"
                    placeholder="Password"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#ff4b4b] hover:text-red-600"
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#6039ff] focus:ring-[#6039ff] border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-[15px] text-gray-700 font-medium cursor-pointer">
                    Remember Me
                  </label>
                </div>
                <div className="text-sm">
                  <Link to="/forgot-password" className="font-semibold text-[#00c2ff] hover:text-[#00a8e0]">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div className="pt-2 flex flex-col items-center">
                <button
                  type="submit"
                  className="w-full max-w-[200px] flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-md text-[15px] font-bold text-white bg-[#6039ff] hover:bg-[#502ce0] focus:outline-none transition-colors mb-4"
                >
                  Log In
                </button>
                <Link to="/signup" className="text-[#00c2ff] font-semibold hover:underline">
                  Register Now
                </Link>
              </div>
            </form>

            <p className="mt-8 text-center text-gray-600 text-[15px] font-medium">
              Don't have an account?{' '}
              <Link to="/signup" className="font-bold text-[#b854ff] hover:underline">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
