import Header from "../componets/Header";
import Footer from "../componets/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F9F9FF] min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Privacy <span className="text-[#6039ff]">Policy</span></h1>
          <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
            <p>Last updated: May 2026</p>
            <p>Welcome to Prince Gajera. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h3>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h3>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our services, manage our relationship with you, and improve our website and services.</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h3>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
