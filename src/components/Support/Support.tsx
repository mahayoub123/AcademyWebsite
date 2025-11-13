import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
const Support: React.FC = () => {
  const sup = useSelector((state: RootState) => state.sup);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Student Support
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          At Little Learners Academy, we are committed to providing a supportive
          and nurturing environment that meets the unique needs of each student.
          Our student support services include
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sup.map((sup) => (
          <div
            key={sup.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={sup.image}
                  alt={sup.title}
                  className=" object-contain  w-[75px] h-[75px] "
                />
                <h3 className="font-ralway text-lg font-semibold mt-16">
                  {sup.title}
                </h3>
              </div>
              <p className="text-gray-800 text-sm font-outfit">{sup.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
