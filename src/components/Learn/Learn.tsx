import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Learn: React.FC = () => {
  const learn = useSelector((state: RootState) => state.learn);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          What Students Learn
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          At Little Learners Academy, we strive to cultivate a love for learning
          and equip children with essential skills for their future success. Our
          academic programs cover a wide range of subjects, allowing students to
          develop a strong foundation and discover their interests. Some key
          areas of learning include
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {learn.map((learn) => (
          <div
            key={learn.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className=" mb-2">
                <img
                  src={learn.image}
                  alt={learn.title}
                  className=" object-contain"
                />
                <h3 className="font-ralway text-lg font-semibold mt-16">
                  {learn.title}
                </h3>
              </div>

              <p className="text-gray-800 text-sm font-outfit">{learn.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Learn;
