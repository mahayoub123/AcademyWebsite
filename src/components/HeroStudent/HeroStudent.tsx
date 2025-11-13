import React from "react";
import hero from "../../assets/images/Abstract Design.png";
const HeroStudent: React.FC = () => {
  return (
    <section className="bg-[#FFF]  w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug font-ralway">
            Embracing Learning with Discovery and Joy
          </h1>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base font-outfit">
            Welcome to our Student Life page, where the magic of childhood comes
            alive through the enriching experiences and adventures that our
            students embark on each day. At our kindergarten school, we believe
            that learning goes beyond textbooks, and we strive to create a
            holistic and engaging environment that nurtures every aspect of a
            child's development.
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

export default HeroStudent;
