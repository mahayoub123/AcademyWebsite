import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import photo from "../../assets/images/Container.png";
const Navigate: React.FC = () => {
  const nav = useSelector((state: RootState) => state.nav);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Navigate through our Pages
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {nav.map((nav) => (
          <div
            key={nav.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-outfit text-lg font-semibold">
                  {nav.title}
                </h3>
              </div>
              <img src={photo} alt="img" />
              <p className="text-gray-800 text-sm font-outfit">{nav.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navigate;
