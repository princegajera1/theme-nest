import React from 'react';
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Get in <span className="text-[#6039ff]">Touch</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Have a question or need help with a template? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
            
            {/* Contact Information */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f5f3ff] rounded-xl flex items-center justify-center text-[#6039ff] shrink-0">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                      <p className="text-gray-500">123 Theme Street, NY 10001, USA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f5f3ff] rounded-xl flex items-center justify-center text-[#6039ff] shrink-0">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                      <a href="mailto:support@themenest.ai" className="text-gray-500 hover:text-[#6039ff]">support@themenest.ai</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f5f3ff] rounded-xl flex items-center justify-center text-[#6039ff] shrink-0">
                      <FaPhoneAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                      <a href="tel:+1234567890" className="text-gray-500 hover:text-[#6039ff]">+1 (234) 567-890</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form using FormSubmit (No Backend Required) */}
            <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[24px] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              {/* NOTE: Change 'your_email@gmail.com' to your actual Gmail address */}
              <form action="https://formsubmit.co/princegajera944@gmail.com" method="POST" className="space-y-6">
                
                {/* Honeypot for spam protection */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success Page Redirect */}
                <input type="hidden" name="_next" value={window.location.href} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all" 
                    placeholder="How can we help?" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    required 
                    rows="5" 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6039ff]/50 transition-all resize-none" 
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#6039ff] text-white py-4 rounded-xl font-bold hover:bg-[#502ce0] transition-colors shadow-lg shadow-[#6039ff]/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
