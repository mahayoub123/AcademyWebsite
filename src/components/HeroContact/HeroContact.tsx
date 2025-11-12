import React from "react";
import hero from "../../assets/images/Abstract Design.png";
const HeroContact: React.FC = () => {
  return (
    <section className="bg-[#FFF]  w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug font-ralway">
            Feel Free To Connect With Us
          </h1>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base font-outfit">
            We value open communication and are eager to assist you with any
            inquiries. Feel free to reach out to us through any of the following
            contact methods
          </p>
        </div>

        <div className="flex justify-center relative">
          <img
            src={hero}
            alt="Hero "
            className="w-full max-w-lg rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
