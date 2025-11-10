import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Benifts: React.FC = () => {
  const ben = useSelector((state: RootState) => state.ben);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Our Benefits
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ben.map((ben) => (
          <div
            key={ben.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={ben.image}
                  alt={ben.title}
                  className=" object-contain  w-[75px] h-[75px] "
                />
                <h3 className="font-ralway text-lg font-semibold mt-16">
                  {ben.title}
                </h3>
              </div>

              <p className="text-gray-800 text-sm font-outfit">{ben.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benifts;
