import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-700 text-soft-pink p-4 shadow-md mb-8 text-center border-6 border-pink-500 transition-all duration-300">
      <section
        id="contact"
        className="full-w-screen w-full bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-700 rounded-lg px-3 py-4 flex flex-col items-center justify-center shadow-[0_10px_40px_5px_rgba(75,0,130,0.7)]"
      >
        <h2 className="text-5xl font-extrabold text-gradient bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text px-4 py-9">
          CONTACT
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Left Section */}
          <div className="max-w-md text-center md:text-left text-white">
            <h3 className="text-2xl font-semibold mb-4">Drop Me a Message</h3>
            <p className="mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-1/4 items-center justify-center">
                  <FaPhoneAlt className="h-6 w-6 text-black" />
                </div>
                <span className="text-lg">+212656034538</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-1/4 items-center justify-center">
                  <FaEnvelope className="h-6 w-6 text-black" />
                </div>
                <span>aichaoukdou02@gmail.com</span>
              </div>
              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="p-1/4 items-center justify-center">
                  <FaMapMarkerAlt className="h-6 w-6 text-black" />
                </div>
                <span>
                  House No: ****************************************
                </span>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="p-6 bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-700 rounded-lg shadow-[0_20px_40px_10px_rgba(75,0,130,0.7)] max-w-sm w-full space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-black text-black outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-black text-black-800 outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-md bg-black text-black outline-none"
              rows="4"
            ></textarea>
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-300 transition">
              Send
            </button>
          </div>
        </div>
        <footer className="text-center mt-12 text-white">
          <p>2025 - aicha, All rights reserved</p>
        </footer>
      </section>
    </div>
  );
};

export default Contact;
