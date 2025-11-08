import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import execImg from "../assets/tailored-consulting.png"; // right-side image

export default function ExecutionHome() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      number: "01.",
      title: "Customized Solutions",
      desc: "Every engagement is tailored to the unique needs and context of medium-sized businesses, ensuring practical and scalable outcomes.",
    },
    {
      number: "02.",
      title: "End-to-End Support",
      desc: "We partner through every step of the execution journey, from strategy to measurable delivery.",
    },
    {
      number: "03.",
      title: "Sustainable Impact",
      desc: "Our approach ensures long-term success through resilient and adaptable strategies.",
    },
  ];

  return (
    <section className="bg-[#f6df70] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 px-6 md:px-12">
        {/* ==== Left Content ==== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-xl md:text-2xl text-black mb-3 font-medium">
            Tailored Consulting.
          </h3>
          <h2 className="text-4xl md:text-5xl italic font-semibold text-black mb-10 leading-tight">
            End-to-End Execution.
          </h2>

          <div className="space-y-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="border-b border-black/20 pb-5 transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full text-left"
                >
                  <h4 className="text-xl md:text-2xl font-semibold text-black flex items-center gap-2">
                    <span className="italic text-[#c1272d] font-semibold">
                      {item.number}
                    </span>
                    {item.title}
                  </h4>

                  {openIndex === index ? (
                    <Minus className="text-black w-6 h-6" />
                  ) : (
                    <Plus className="text-black w-6 h-6" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="mt-3 text-black/80 text-[16px] md:text-[17px] leading-relaxed pl-7 pr-2"
                    >
                      {item.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ==== Right Image ==== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="w-[80%] md:w-[65%] lg:w-[60%] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
            <img
              src={execImg}
              alt="Consulting meeting"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
