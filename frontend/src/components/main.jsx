import { useState } from "react";
import { Navbar } from "./navbar";
import { baseUrl } from "../utils/apis";
import axios from "axios";

export const Main = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.phone,
        city: formData.city,
      };

      await axios.post(`${baseUrl}/contact/submitcontactform`, payload); // ✅ Use your actual backend URL

      alert('Contact form submitted successfully!');
      setFormData({ fullName: '', email: '', phone: '', city: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Something went wrong!');
    }
  };


  return (
    <>
      <Navbar />
      <main className="pt-20 top-0 relative bg-cover bg-center min-h-[calc(100vh-10px)] flex items-center justify-center bg-main-bg">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-xl gap-11 justify-between relative z-10 p-8 text-white">
          {/* Left Section */}
          <div className="p-8 text-black">
            <h1 className="text-7xl font-bold text-white leading-tight">
              Consultation,<br />Design,<br />& Marketing
            </h1>
          </div>

          {/* Right Section - Form */}
          <div className="px-10 py-6 bg-blue-400/50 rounded-lg border">
            <p className="text-xl font-semibold mb-4 text-center">
              Get a Free Consultation
            </p>
           <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="border border-gray-300 rounded px-4 py-2 text-black"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email Address"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 rounded px-4 py-2 text-black"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="border border-gray-300 rounded px-4 py-2 text-black"
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="border border-gray-300 rounded px-4 py-2 text-black"
        required
      />
      <input
        type="submit"
        value="Submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 cursor-pointer"
      />
    </form>
          </div>
        </div>
      </main>
    </>
  );
};
