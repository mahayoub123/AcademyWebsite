import React from "react";
import hero from "../../assets/images/Abstract Design.png";
const HeroAbout: React.FC = () => {
  return (
    <section className="bg-[#FFF]  w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug font-ralway">
            Welcome to Little Learners Academy
          </h1>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base font-outfit">
            A leading kinder garden school dedicated to providing a nurturing
            and stimulating environment for young learners. With a commitment to
            excellence in early education, we believe in shaping curious minds
            and building a strong foundation for a lifelong love of learning.
            Our holistic approach fosters intellectual, social, emotional, and
            physical development, ensuring that each child reaches their full
            potential.
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

export default HeroAbout;
