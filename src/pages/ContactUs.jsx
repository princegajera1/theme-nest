import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Get in <span className="text-[#6039ff]">Touch</span></h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">We'd love to hear from you. Please fill out this form or shoot us an email.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[40px] shadow-2xl p-8 lg:p-12 border border-gray-50">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8 bg-gradient-to-br from-[#6039ff] to-[#8c6fff] text-white p-10 rounded-[30px]">
              <div>
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-white/80 font-medium">Say something to start a live chat!</p>
              </div>
              
              <div className="space-y-6 pt-8">
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-xl text-[#00c2ff]" />
                  <span className="font-semibold">+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-xl text-[#00c2ff]" />
                  <span className="font-semibold">hello@themenest.ai</span>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-xl text-[#00c2ff] mt-1" />
                  <span className="font-semibold">132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 lg:pl-8">
              <form action="https://formsubmit.co/your_email@gmail.com" method="POST" className="space-y-6">
                {/* Security and redirection fields for FormSubmit */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.location.href} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" name="First Name" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all text-sm" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" name="Last Name" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all text-sm" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input type="email" name="Email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all text-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" name="Phone Number" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all text-sm" placeholder="+1 234 567 890" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea name="Message" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all h-32 resize-none text-sm" placeholder="Write your message..."></textarea>
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="bg-[#6039ff] text-white px-10 py-3.5 rounded-xl font-bold hover:bg-[#502ce0] transition-colors shadow-lg shadow-[#6039ff]/30 text-sm">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
