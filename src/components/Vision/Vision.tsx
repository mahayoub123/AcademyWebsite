import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Vision: React.FC = () => {
  const vision = useSelector((state: RootState) => state.vision);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Our Mission & Visions
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love for learning and personal
          growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vision.map((vision) => (
          <div
            key={vision.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-ralway text-lg font-semibold mt-16">
                  {vision.title}
                </h3>
                <img
                  src={vision.image}
                  alt={vision.title}
                  className=" object-contain  w-[75px] h-[75px] "
                />
              </div>

              <p className="text-gray-800 text-sm font-outfit">{vision.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
