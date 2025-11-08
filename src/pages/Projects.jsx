// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import CTASection from "../components/CTA";

// gsap.registerPlugin(ScrollTrigger);

// const OurProjects = () => {
//   const sectionRef = useRef(null);
//   const heroImgRef = useRef(null);

//   useEffect(() => {
//     // Hero image parallax
//     gsap.to(heroImgRef.current, {
//       scale: 1.1,
//       yPercent: 10,
//       ease: "none",
//       scrollTrigger: {
//         trigger: heroImgRef.current,
//         start: "top bottom",
//         scrub: true,
//       },
//     });

//     // Fade-up animations
//     const elements = sectionRef.current.querySelectorAll(".fade-up");
//     elements.forEach((el) => {
//       gsap.fromTo(
//         el,
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 85%",
//           },
//         }
//       );
//     });
//   }, []);

//   const projects = [
//     {
//       title: "E-Mobility Optimization",
//       desc: "Developed a complete powertrain sourcing and validation ecosystem for an EV manufacturer, reducing costs by 30%.",
//       img: "https://images.unsplash.com/photo-1616761585687-2f8b3f92c3f5?auto=format&fit=crop&w=1000&q=80",
//       tag: "Automotive",
//     },
//     {
//       title: "Smart Logistics System",
//       desc: "Designed an AI-based logistics network for an e-commerce giant enabling real-time delivery optimization.",
//       img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b0?auto=format&fit=crop&w=1000&q=80",
//       tag: "Technology",
//     },
//     {
//       title: "Connected Healthcare",
//       desc: "Implemented IoT-enabled medical devices for hospitals to monitor patient vitals remotely with predictive analytics.",
//       img: "https://images.unsplash.com/photo-1576765607924-3f7b41f3f19c?auto=format&fit=crop&w=1000&q=80",
//       tag: "Healthcare",
//     },
//     {
//       title: "Green Manufacturing",
//       desc: "Helped a manufacturing leader achieve carbon-neutral operations through process automation and energy audits.",
//       img: "https://images.unsplash.com/photo-1606146489679-8dfc3d9e3c90?auto=format&fit=crop&w=1000&q=80",
//       tag: "Sustainability",
//     },
//   ];

//   return (
//     <>
//       <Header />

//       {/* === HERO SECTION === */}
//       <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
//         <motion.img
//           ref={heroImgRef}
//           src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80"
//           alt="Projects Hero"
//           className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

//         <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-5xl md:text-7xl font-bold text-white leading-tight"
//           >
//             Our <span className="text-[#f6df70] italic">Projects</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-gray-200 text-lg md:text-xl mt-5 leading-relaxed"
//           >
//             Delivering innovation, impact, and measurable outcomes through every
//             partnership.
//           </motion.p>
//         </div>
//       </section>

//       {/* === PROJECTS GRID === */}
//       <section
//         ref={sectionRef}
//         className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20"
//       >
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-semibold text-center fade-up mb-16">
//             Featured <span className="text-[#c1272d] italic">Case Studies</span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12">
//             {projects.map((project, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 150 }}
//                 className="fade-up relative rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500 group border border-gray-100"
//               >
//                 <div className="relative overflow-hidden">
//                   <motion.img
//                     src={project.img}
//                     alt={project.title}
//                     className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#c1272d]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//                 <div className="p-8">
//                   <span className="text-sm uppercase tracking-wide text-[#c1272d] font-medium">
//                     {project.tag}
//                   </span>
//                   <h3 className="text-2xl font-bold mt-2 text-gray-800 group-hover:text-[#c1272d] transition">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed mt-3 text-base">
//                     {project.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* === IMPACT SECTION === */}
//       <section className="bg-[#f6df70]/40 py-24">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h3 className="text-4xl font-bold fade-up mb-16">
//             The <span className="text-[#c1272d] italic">Impact</span> We Create
//           </h3>

//           <div className="grid md:grid-cols-4 gap-10">
//             {[
//               { value: "50+", label: "Clients Served" },
//               { value: "120+", label: "Projects Completed" },
//               { value: "15+", label: "Industries Covered" },
//               { value: "98%", label: "Client Satisfaction" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -8, scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//                 className="fade-up bg-white rounded-xl p-10 shadow-md hover:shadow-xl border-t-4 border-[#c1272d]/70"
//               >
//                 <h4 className="text-5xl font-bold text-[#c1272d] mb-2">
//                   {item.value}
//                 </h4>
//                 <p className="text-gray-700 text-lg font-medium">
//                   {item.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTASection />
//       <Footer />
//     </>
//   );
// };

// export default OurProjects;

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTA";

gsap.registerPlugin(ScrollTrigger);

const OurProjects = () => {
  const sectionRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    // Hero parallax
    gsap.to(heroImgRef.current, {
      scale: 1.1,
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: heroImgRef.current,
        start: "top bottom",
        scrub: true,
      },
    });

    // Fade-up animations
    const elements = sectionRef.current.querySelectorAll(".fade-up");
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Header />

      {/* === HERO SECTION === */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.img
          ref={heroImgRef}
          src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1600&q=80"
          alt="Projects Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55] top-[-20px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Our <span className="text-[#f6df70] italic">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-200 text-lg md:text-xl mt-5 leading-relaxed"
          >
            Delivering innovation, impact, and measurable outcomes across
            software, sourcing, and manufacturing domains.
          </motion.p>
        </div>
      </section>

      {/* === PROJECTS CONTENT === */}
      <section
        ref={sectionRef}
        className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto space-y-24">
          {/* ===================== SOFTWARE PROJECTS ===================== */}
          <div className="fade-up">
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
              Software <span className="text-[#c1272d] italic">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-lg">
                  <li>Connectivity solution to the top E-commerce giant</li>
                  <li>Robotic retrieval system for a Govt Library</li>
                  <li>Predictive mechanism for Ferry maintenance</li>
                  <li>VR Tour for warehouses and Plants in Europe</li>
                  <li>AI assisted automated costing mechanism</li>
                  <li>Hardware &amp; Software design for AEB Controller</li>
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="fade-up"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091012184-5c2b37c1b7b0?auto=format&fit=crop&w=900&q=80"
                  alt="Software Projects"
                  className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>

          {/* ===================== COMPONENT SOURCING PROJECTS ===================== */}
          <div className="fade-up">
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
              Component{" "}
              <span className="text-[#c1272d] italic">Sourcing Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="fade-up order-2 md:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1581093588401-22c95f2a6c80?auto=format&fit=crop&w=900&q=80"
                  alt="Component Sourcing"
                  className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <div className="space-y-6 text-gray-700 leading-relaxed order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-[#c1272d]">
                  Automotive Components
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>
                    Powertrain components for Federal institution overseas
                  </li>
                  <ul className="ml-6 list-disc">
                    <li>Crankshafts</li>
                    <li>Camshafts</li>
                    <li>EV Transmission Components</li>
                    <li>Transfer Case Prototype</li>
                    <li>Axle Assembly (in RFQ stage)</li>
                  </ul>
                  <li>PCBA, ICP, VCU, BCM, BDU, Cold plate (in RFQ stage)</li>
                </ul>

                <div className="mt-6 text-base">
                  <p>
                    <strong>50 Crs:</strong> Component Sourcing — Powertrain, LV
                    &amp; HV Harness, HPDC, GDC, VCU, BCM &amp; BDU
                  </p>
                  <p>
                    <strong>10 Crs:</strong> Prototypes, Tooling &amp; Fixtures
                    — Lighting &amp; Interior trims, BIW, Aluminium parts
                  </p>
                  <p>
                    <strong>7.5 Crs:</strong> Software — Telematics, Data Engg &
                    ADAS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== CREDENTIALS SECTION ===================== */}
          <div className="fade-up text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12">
              Our <span className="text-[#c1272d] italic">Credentials</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Highly Experienced Team",
                  desc: "Decades of expertise across automotive, software, and industrial domains.",
                  img: "https://images.unsplash.com/photo-1581093588401-23c99d8d5b4f?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Strong Supplier Network",
                  desc: "Robust domestic and international partnerships ensuring reliable sourcing.",
                  img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Global Partner Network",
                  desc: "Collaborations that enable seamless international project execution.",
                  img: "https://images.unsplash.com/photo-1581090700227-1c8e4c63c6f9?auto=format&fit=crop&w=800&q=80",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white border border-gray-100 transition-all duration-500"
                >
                  <div className="overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-[#c1272d] mb-2">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === IMPACT COUNTERS === */}
      <section className="bg-[#f6df70] py-24">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold fade-up mb-16">
            The <span className="text-[#c1272d] italic">Impact</span> We Create
          </h3>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { value: "50+", label: "Clients Served" },
              { value: "120+", label: "Projects Completed" },
              { value: "15+", label: "Industries Covered" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="fade-up bg-white rounded-xl p-10 shadow-md hover:shadow-xl border-t-4 border-[#c1272d]/70"
              >
                <h4 className="text-5xl font-bold text-[#c1272d] mb-2">
                  {item.value}
                </h4>
                <p className="text-gray-700 text-lg font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default OurProjects;
