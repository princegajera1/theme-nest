import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/pop-up-img.jpg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    // Retrieve users from localStorage (mock backend)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Check if user already exists
    if (users.find(u => u.email === email)) {
      setError("An account with this email already exists! Please log in.");
      return;
    }

    // Save new user
    const newUser = { username, email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    
    // Log them in immediately
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    alert("Registration successful! You are now logged in.");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black/80 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#ff39b0] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      {/* Modal Container */}
      <div className="w-full max-w-[1000px] bg-white rounded-[30px] shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10 min-h-[650px]">
        
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
            
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-2">
              Create your account and started
            </h2>
            <p className="text-center text-gray-500 mb-6 font-medium text-sm">
              Create your account to start your journey with ease
            </p>

            {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium text-center">{error}</div>}

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ff] focus:ring-1 focus:ring-[#6039ff] transition-all text-gray-800 placeholder-gray-400 text-sm"
                  placeholder="John Dare"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ff] focus:ring-1 focus:ring-[#6039ff] transition-all text-gray-800 placeholder-gray-400 text-sm"
                  placeholder="Example@gmail.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ff] focus:ring-1 focus:ring-[#6039ff] transition-all text-gray-800 placeholder-gray-400 text-sm"
                  placeholder="•••••"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Confirmed Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ff] focus:ring-1 focus:ring-[#6039ff] transition-all text-gray-800 placeholder-gray-400 text-sm"
                  placeholder="•••••"
                />
              </div>

              <div className="pt-2 flex flex-col items-center">
                <button
                  type="submit"
                  className="w-full max-w-[250px] flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-md text-sm font-bold text-white bg-[#8b5cf6] hover:bg-[#7c3aed] focus:outline-none transition-colors mb-4"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-gray-600 text-[14px] font-medium">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-[#b854ff] hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
