import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import envelop from "../../assets/images/envelop.svg";
const Team: React.FC = () => {
  const team = useSelector((state: RootState) => state.team);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Our Team Members
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          At Little Learners Academy, our teaching team is the heart of our
          educational journey. We take great pride in employing highly qualified
          and passionate educators who possess a deep understanding of early
          childhood development. Our teachers create a warm and engaging
          atmosphere, encouraging curiosity, instilling confidence, and
          fostering a love for learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {team.map((team) => (
          <div
            key={team.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className=" flex justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={team.image}
                    alt={team.title}
                    className=" object-contain  w-[75px] h-[75px] "
                  />
                  <h3 className="font-ralway text-lg font-semibold mt-16">
                    {team.title}
                  </h3>
                </div>
                <div>
                  <img src={envelop} alt="icon" />
                </div>
              </div>

              <p className="text-gray-800 text-sm font-outfit">{team.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
