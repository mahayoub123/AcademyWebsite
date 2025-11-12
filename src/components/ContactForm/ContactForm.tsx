import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[white] text-black px-4">
      <div className="w-full max-w-md bg-[white]/80 backdrop-blur-md rounded-2xl shadow-lg p-8 relative">
        <div className="text-center mb-8">
          <h1 className="text-[black] text-3xl font-semibold mb-2 font-ralway">
            Student Information
          </h1>
          <p className="text-gray-800 text-sm font-ralway">
            If you have specific questions or wish to request more information
            about Little Learners Academy, please complete the contact form
            below. Kindly provide the following details to help us better
            understand your needs
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full bg-[#ffff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full bg-[#ffff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full bg-[#ffff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className="w-full bg-[#ffff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Enter Student Name"
            className="w-full bg-[#ffff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Enter Student Age"
            className="w-full bg-[#ffff] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <textarea placeholder="Enter a Message" />

          <button
            type="button"
            className="w-full border bg-[#FFAE80] border-gray-700 text-gray-300 rounded-full py-3 hover:bg-[#1c1c1c] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
