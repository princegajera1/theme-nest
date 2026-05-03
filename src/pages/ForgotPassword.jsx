import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/pop-up-img.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleVerifyEmail = (e) => {
    e.preventDefault();
    setError("");
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find(u => u.email === email);
    
    if (userExists) {
      setStep(2);
      setMessage("Email verified! Please enter your new password.");
    } else {
      setError("We couldn't find an account with that email address.");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!newPassword) {
      setError("Please enter a new password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map(u => {
      if (u.email === email) {
        return { ...u, password: newPassword };
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Password reset successfully! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black/80 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#00c2ff] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
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
          <Link to="/login" className="absolute top-6 left-6 text-gray-400 hover:text-gray-600 transition-colors text-sm font-bold flex items-center gap-1">
            &larr; Back to Login
          </Link>

          <Link to="/" className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors border border-gray-200 border-dashed rounded p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>

          <div className="max-w-md mx-auto w-full mt-6">
            <Link to="/" className="text-2xl font-bold flex justify-center tracking-tight cursor-pointer mb-6">
              <span className="text-[#6039ff]">Theme</span>
              <span className="text-[#1a1a1a]">Nest.ai</span>
            </Link>
            
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
              Reset Password
            </h2>
            <p className="text-center text-gray-500 mb-8 font-medium">
              {step === 1 ? "Enter your email to reset your password" : "Create a new strong password"}
            </p>

            {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium text-center">{error}</div>}
            {message && <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm font-medium text-center">{message}</div>}

            {step === 1 ? (
              <form onSubmit={handleVerifyEmail} className="space-y-5">
                <div>
                  <label className="block text-[15px] font-semibold text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ff] focus:ring-1 focus:ring-[#6039ff] transition-all text-gray-800 placeholder-gray-400"
                    placeholder="Enter your registered email"
                  />
                </div>
                <div className="pt-2 flex flex-col items-center">
                  <button
                    type="submit"
                    className="w-full max-w-[200px] flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-md text-[15px] font-bold text-white bg-[#6039ff] hover:bg-[#502ce0] focus:outline-none transition-colors mb-4"
                  >
                    Verify Email
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-5">
                <div>
                  <label className="block text-[15px] font-semibold text-gray-700 mb-1.5">
                    New Password
                  </label>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ff] focus:ring-1 focus:ring-[#6039ff] transition-all text-gray-800 placeholder-gray-400"
                    placeholder="Create a new password"
                  />
                </div>
                <div className="pt-2 flex flex-col items-center">
                  <button
                    type="submit"
                    className="w-full max-w-[200px] flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-md text-[15px] font-bold text-white bg-[#6039ff] hover:bg-[#502ce0] focus:outline-none transition-colors mb-4"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
