import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Features: React.FC = () => {
  const fet = useSelector((state: RootState) => state.fet);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Our Special Features
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fet.map((fet) => (
          <div
            key={fet.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={fet.image}
                  alt={fet.title}
                  className=" object-contain  w-[75px] h-[75px] "
                />
                <h3 className="font-ralway text-lg font-semibold mt-16">
                  {fet.title}
                </h3>
              </div>

              <p className="text-gray-800 text-sm font-outfit">{fet.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
