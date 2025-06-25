import { useState } from "react";
import axios from "axios";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";
import { baseUrl } from "../utils/apis"; // ✅ Make sure this points to your backend base URL

export const Footer = () => {
  const [emailData, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (emailData.trim() === "") {
      toast.error("Please enter your email address.");
      return;
    }

    try {
      await axios.post(`${baseUrl}/subscriber/addsubscriber`, { email: emailData });
      toast.success("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      toast.error("Subscription failed. Try again later.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-10">
      {/* CTA Section */}
      <div className="relative bg-foot-bg bg-cover bg-center py-10 px-6 rounded-lg mb-12 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0 rounded-lg"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-xl md:text-2xl font-semibold capitalize mb-4">
            Learn about our listing process, as well as our additional staging and design work.
          </h1>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Service</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Subscribe Us</h2>
          <p className="text-gray-400 mb-2">Get the latest updates and offers.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={emailData}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="px-4 py-2 rounded text-black w-full sm:w-auto"
              required
            />
            <button
              onClick={handleSubscribe}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Logo & Socials */}
        <div className="text-center md:text-left">
          <img
            src="/images/logo.svg"
            alt="Company Logo"
            className="mx-auto md:mx-0 w-32 mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <ul className="flex justify-center md:justify-start gap-4 mt-2">
            <li><a href="#"><FaFacebook className="w-6 h-6 hover:scale-110 transition" /></a></li>
            <li><a href="#"><FaTwitterSquare className="w-6 h-6 hover:scale-110 transition" /></a></li>
            <li><a href="#"><FaInstagramSquare className="w-6 h-6 hover:scale-110 transition" /></a></li>
            <li><a href="#"><FaLinkedin className="w-6 h-6 hover:scale-110 transition" /></a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};
