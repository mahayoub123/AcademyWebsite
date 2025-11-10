import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import photo from "../../assets/images/stars.png";
const Test: React.FC = () => {
  const test = useSelector((state: RootState) => state.test);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Our Testimonials
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {test.map((test) => (
          <div
            key={test.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={test.image}
                  alt={test.title}
                  className=" object-contain  w-[75px] h-[75px] "
                />
                <h3 className="font-ralway text-lg font-semibold mt-16">
                  {test.title}
                </h3>
              </div>
              <div>
                <img src={photo} alt="pic" />
              </div>
              <p className="text-gray-800 text-sm font-outfit">{test.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Test;
