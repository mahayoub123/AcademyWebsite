import React from "react";
import hero from "../../assets/images/hero.png";
const Hero: React.FC = () => {
  return (
    <section className="bg-[#FFF]  w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug font-ralway">
            Where Young Minds Blossom and{" "}
            <span className="text-[#FF8D4D]"> Dreams Take Flight. !</span>
          </h1>
          <p className="text-gray-800 leading-relaxed text-sm md:text-base font-outfit">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
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

export default Hero;
