import React from "react";
import hero from "../../assets/images/Abstract Design.png";
const HeroAdm: React.FC = () => {
  return (
    <section className="bg-[#FFF]  w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug font-ralway">
            Join Our Family of Young Learners
          </h1>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base font-outfit">
            At Little Learners Academy, we welcome you to embark on an exciting
            educational journey for your child. Our admission process is
            designed to be transparent, straightforward, and inclusive. Here's a
            step-by-step guide to joining our school
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

export default HeroAdm;
