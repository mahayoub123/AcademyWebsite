import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
const Awards: React.FC = () => {
  const awards = useSelector((state: RootState) => state.awards);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Our Awards and Recognitions
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We are
          honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect our
          team's relentless efforts in creating an exceptional learning
          environment for our students.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.map((awards) => (
          <div
            key={awards.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={awards.image}
                  alt={awards.title}
                  className=" object-contain  w-[75px] h-[75px] "
                />
                <h3 className="font-ralway text-lg font-semibold mt-16">
                  {awards.title}
                </h3>
              </div>
              <p className="text-gray-800 text-sm font-outfit">{awards.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
