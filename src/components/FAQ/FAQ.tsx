import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const FAQ: React.FC = () => {
  const faq = useSelector((state: RootState) => state.faq);

  return (
    <section className="bg-[#ffff] text-black py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-ralway text-3xl md:text-4xl font-bold text-black">
          Frequently Asked Questions
        </h2>
        <p className="font-ralway mt-3 text-gray-800 max-w-3xl mx-auto">
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child's education.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {faq.map((faq) => (
          <div
            key={faq.id}
            className="bg-[#ffff] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-outfit text-lg font-semibold">
                  {faq.title}
                </h3>
              </div>

              <p className="text-gray-800 text-sm font-outfit">{faq.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
