import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Activities: React.FC = () => {
  const act = useSelector((state: RootState) => state.act);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Extracurricular Activities
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          At Little Learners Academy, we believe in nurturing well-rounded
          individuals. Our extracurricular activities offer a diverse range of
          experiences that complement our academic curriculum and encourage
          students to explore their interests and passions. We offer a wide
          array of extracurricular activities, including
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {act.map((act) => (
          <div
            key={act.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={act.image}
                  alt={act.title}
                  className=" object-contain  w-[75px] h-[75px] "
                />
                <h3 className="font-ralway text-lg font-semibold mt-16">
                  {act.title}
                </h3>
              </div>

              <p className="text-gray-800 text-sm font-outfit">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
