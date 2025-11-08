// import React from "react";
// import { motion } from "framer-motion";
// import aboutImg from "../assets/rec1.png"; // foreground image (people)
// import aboutBg from "../assets/rec2.png"; // faint lotus/shape behind

// export default function AboutHome() {
//   return (
//     <section className="relative w-full py-14 md:py-20 overflow-hidden bg-white">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
//         {/* ==== Left Image Section ==== */}
//         <div className="relative w-full md:w-1/2 flex justify-center">
//           {/* Background lotus / pattern */}
//           <img
//             src={aboutBg}
//             alt="background pattern"
//             className="absolute inset-0 -z-10"
//           />

//           {/* Main image inside gradient border shape */}
//           <div className="relative w-[300px] md:w-[420px] aspect-square ">
//             <div className="overflow-hidden  bg-white">
//               <img
//                 src={aboutImg}
//                 alt="ANTX Team"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ==== Right Text Section ==== */}
//         <motion.div
//           className="w-full md:w-1/2 text-center md:text-left"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl md:text-3xl font-semibold text-black leading-snug">
//             <span className="text-[#c1272d] font-bold">Growth by</span> Purpose,
//             <br className="hidden md:block" /> Partnership, and Perseverance.
//           </h2>

//           <p className="mt-4 text-black/80 text-base md:text-[17px] leading-relaxed">
//             At ANTX Consulting, we{" "}
//             <span className="font-semibold text-black">
//               transform strategic vision into measurable success.
//             </span>{" "}
//             Our team blends industry expertise with practical execution to build
//             resilient, future-ready organizations.
//           </p>

//           <p className="mt-3 text-black/80 text-base md:text-[17px] leading-relaxed">
//             ANTX was set up as a boutique Management Consulting & Business
//             Advisory firm with a{" "}
//             <span className="font-semibold text-black">
//               strong focus on Execution & Result Assurance.
//             </span>
//           </p>

//           {/* Button */}
//           <motion.a
//             href="/about"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#f23838] to-[#f6c65b] text-white font-medium shadow-md"
//           >
//             Know More About Us →
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/rec1.png"; // foreground image (people)
import aboutBg from "../assets/rec2.png"; // lotus/shape behind
import sectionBg from "../assets/homeAboutBG.png"; // <-- NEW background image for whole section

export default function AboutHome() {
  return (
    <section
      className="relative w-full py-14 md:py-20 overflow-hidden bg-white bg-contain bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${sectionBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12 relative z-10">
        {/* ==== Left Image Section ==== */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {/* Background lotus / pattern */}
          <img
            src={aboutBg}
            alt="background pattern"
            className="absolute w-[40%] max-w-none opacity-60 -z-10"
          />

          {/* Main image inside clean shape */}
          <div className="relative w-[300px] md:w-[420px] aspect-square">
            <div className="overflow-hidden  p-[3px]">
              <div className="overflow-hidden bg-white">
                <img
                  src={aboutImg}
                  alt="ANTX Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==== Right Text Section ==== */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black leading-snug">
            <span className="text-[#c1272d] font-bold">Growth by</span> Purpose,
            <br className="hidden md:block" /> Partnership, and Perseverance.
          </h2>

          <p className="mt-4 text-black/80 text-base md:text-[17px] leading-relaxed">
            At ANTX Consulting, we{" "}
            <span className="font-semibold text-black">
              transform strategic vision into measurable success.
            </span>{" "}
            Our team blends industry expertise with practical execution to build
            resilient, future-ready organizations.
          </p>

          <p className="mt-3 text-black/80 text-base md:text-[17px] leading-relaxed">
            ANTX was set up as a boutique Management Consulting & Business
            Advisory firm with a{" "}
            <span className="font-semibold text-black">
              strong focus on Execution & Result Assurance.
            </span>
          </p>

          {/* Button */}
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#f23838] to-[#f6c65b] text-white font-medium shadow-md"
          >
            Know More About Us →
          </motion.a>
        </motion.div>
      </div>

      {/* Optional subtle overlay for contrast */}
      <div className="absolute inset-0 bg-white/50 -z-10" />
    </section>
  );
}
