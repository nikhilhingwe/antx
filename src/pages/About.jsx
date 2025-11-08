// // // // import { useEffect, useRef } from "react";
// // // // import { motion } from "framer-motion";
// // // // import gsap from "gsap";
// // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // import aboutImg from "../assets/aboutHero.jpg"; // Replace with your real image
// // // // import missionImg from "../assets/mission.jpg";
// // // // import teamImg from "../assets/team.jpg";
// // // // import Footer from "../components/Footer";
// // // // import Header from "../components/Header";

// // // // gsap.registerPlugin(ScrollTrigger);

// // // // export default function AboutUs() {
// // // //   const sectionRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const ctx = gsap.context(() => {
// // // //       gsap.utils.toArray(".fade-up").forEach((el) => {
// // // //         gsap.fromTo(
// // // //           el,
// // // //           { y: 50, opacity: 0 },
// // // //           {
// // // //             y: 0,
// // // //             opacity: 1,
// // // //             duration: 1,
// // // //             ease: "power3.out",
// // // //             scrollTrigger: {
// // // //               trigger: el,
// // // //               start: "top 85%",
// // // //             },
// // // //           }
// // // //         );
// // // //       });
// // // //     }, sectionRef);
// // // //     return () => ctx.revert();
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <Header />
// // // //       <section
// // // //         ref={sectionRef}
// // // //         className="bg-white text-gray-800 overflow-hidden"
// // // //       >
// // // //         {/* === Hero Section === */}
// // // //         <div
// // // //           className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
// // // //           style={{
// // // //             backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${aboutImg})`,
// // // //           }}
// // // //         >
// // // //           <div className="text-center text-white px-6 md:px-12">
// // // //             <motion.h1
// // // //               initial={{ opacity: 0, y: 40 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 1 }}
// // // //               className="text-4xl md:text-6xl font-bold font-serif mb-4"
// // // //             >
// // // //               About <span className="text-yellow-400 italic">ANTX</span>{" "}
// // // //               Consulting
// // // //             </motion.h1>
// // // //             <motion.p
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: 0.3 }}
// // // //               className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
// // // //             >
// // // //               Driving innovation, transformation, and prosperity for our clients
// // // //               through strategy, technology, and purpose.
// // // //             </motion.p>
// // // //           </div>
// // // //         </div>

// // // //         {/* === Who We Are === */}
// // // //         <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 fade-up">
// // // //           <div className="grid md:grid-cols-2 gap-12 items-center">
// // // //             <img
// // // //               src={missionImg}
// // // //               alt="Our Mission"
// // // //               className="rounded-2xl shadow-lg w-full object-cover"
// // // //             />
// // // //             <div>
// // // //               <h2 className="text-3xl md:text-4xl font-bold text-[#c1272d] mb-4 font-serif italic">
// // // //                 Who We Are
// // // //               </h2>
// // // //               <p className="text-gray-700 leading-relaxed mb-4">
// // // //                 ANTX Consulting is a results-driven consulting firm focused on
// // // //                 helping businesses scale strategically. We partner with industry
// // // //                 leaders to create innovative solutions that simplify processes,
// // // //                 improve efficiency, and drive measurable growth.
// // // //               </p>
// // // //               <p className="text-gray-700 leading-relaxed">
// // // //                 From digital transformation and automation to sourcing and
// // // //                 enterprise strategy, our multi-disciplinary team delivers
// // // //                 end-to-end excellence for every challenge.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* === Our Mission Section === */}
// // // //         <div className="bg-[#faf7f6] py-20 fade-up">
// // // //           <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
// // // //             <div>
// // // //               <h2 className="text-3xl md:text-4xl font-bold text-[#c1272d] mb-4 font-serif italic">
// // // //                 Our Mission
// // // //               </h2>
// // // //               <p className="text-gray-700 leading-relaxed mb-3">
// // // //                 Our mission is to turn innovation into action — delivering
// // // //                 meaningful change that empowers organizations to thrive in a
// // // //                 fast-evolving digital world.
// // // //               </p>
// // // //               <p className="text-gray-700 leading-relaxed">
// // // //                 By aligning people, processes, and technology, we ensure
// // // //                 sustainable success for our partners and clients.
// // // //               </p>
// // // //             </div>
// // // //             <motion.img
// // // //               whileHover={{ scale: 1.03 }}
// // // //               transition={{ duration: 0.5 }}
// // // //               src={teamImg}
// // // //               alt="Team Collaboration"
// // // //               className="rounded-2xl shadow-lg"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         {/* === Core Values Section === */}
// // // //         <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 fade-up text-center">
// // // //           <h2 className="text-3xl md:text-4xl font-bold text-[#c1272d] mb-8 font-serif italic">
// // // //             Our Core Values
// // // //           </h2>
// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
// // // //             {[
// // // //               {
// // // //                 title: "Integrity",
// // // //                 desc: "We uphold honesty and transparency in every relationship and decision.",
// // // //               },
// // // //               {
// // // //                 title: "Innovation",
// // // //                 desc: "We drive creative solutions that transform businesses sustainably.",
// // // //               },
// // // //               {
// // // //                 title: "Collaboration",
// // // //                 desc: "We believe great results come from teamwork and shared purpose.",
// // // //               },
// // // //               {
// // // //                 title: "Excellence",
// // // //                 desc: "We pursue quality and precision in everything we deliver.",
// // // //               },
// // // //             ].map((value, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 whileHover={{ scale: 1.05 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //                 className="p-6 border rounded-2xl shadow-sm hover:shadow-md bg-white"
// // // //               >
// // // //                 <h4 className="text-xl font-semibold mb-2 text-[#c1272d]">
// // // //                   {value.title}
// // // //                 </h4>
// // // //                 <p className="text-gray-700 text-sm leading-relaxed">
// // // //                   {value.desc}
// // // //                 </p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* === Call to Action (reusing your CTA component) === */}
// // // //         {/* <CTASection /> */}
// // // //       </section>
// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }

// // // import React, { useEffect, useRef } from "react";
// // // import gsap from "gsap";
// // // import Footer from "../components/Footer";
// // // import CTASection from "../components/CTA";
// // // import Header from "../components/Header";

// // // const AboutUs = () => {
// // //   const sectionRef = useRef(null);

// // //   useEffect(() => {
// // //     gsap.fromTo(
// // //       sectionRef.current.querySelectorAll(".fade-up"),
// // //       { y: 40, opacity: 0 },
// // //       { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
// // //     );
// // //   }, []);

// // //   return (
// // //     <>
// // //       <Header />
// // //       <section
// // //         ref={sectionRef}
// // //         className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-20"
// // //       >
// // //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
// // //           <div className="fade-up space-y-4">
// // //             <h1 className="text-4xl md:text-5xl font-semibold text-[#c1272d]">
// // //               About <span className="text-gray-900">ANTX Consulting</span>
// // //             </h1>
// // //             <p className="text-lg text-gray-600 leading-relaxed">
// // //               We are a purpose-driven consulting firm empowering organizations
// // //               to transform their strategies into measurable, sustainable growth.
// // //               Our approach combines innovation, execution excellence, and
// // //               people-first leadership to deliver impactful business outcomes.
// // //             </p>
// // //             <p className="text-lg text-gray-600 leading-relaxed">
// // //               With decades of collective experience, ANTX Consulting helps
// // //               clients unlock new opportunities, streamline operations, and adapt
// // //               to a rapidly evolving digital landscape.
// // //             </p>
// // //           </div>

// // //           <div className="fade-up">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
// // //               alt="Team collaboration"
// // //               className="rounded-2xl shadow-lg w-full object-cover"
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Mission Section */}
// // //         <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-10 text-center fade-up">
// // //           {[
// // //             {
// // //               title: "Our Mission",
// // //               desc: "To empower organizations with actionable strategies that create lasting value and growth.",
// // //               img: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //             },
// // //             {
// // //               title: "Our Vision",
// // //               desc: "Building a future where businesses operate with purpose, agility, and innovation.",
// // //               img: "https://images.pexels.com/photos/3182776/pexels-photo-3182776.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //             },
// // //             {
// // //               title: "Our Values",
// // //               desc: "Integrity, collaboration, and excellence are at the heart of everything we do.",
// // //               img: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
// // //             },
// // //           ].map((card, i) => (
// // //             <div key={i} className="rounded-xl overflow-hidden shadow-md">
// // //               <img
// // //                 src={card.img}
// // //                 alt={card.title}
// // //                 className="w-full h-52 object-cover"
// // //               />
// // //               <div className="p-6 bg-white">
// // //                 <h3 className="text-xl font-semibold mb-2 text-[#c1272d]">
// // //                   {card.title}
// // //                 </h3>
// // //                 <p className="text-gray-600 text-sm leading-relaxed">
// // //                   {card.desc}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //       <CTASection />
// // //       <Footer />
// // //     </>
// // //   );
// // // };

// // // export default AboutUs;

// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Footer from "../components/Footer";
// // import CTASection from "../components/CTA";
// // import Header from "../components/Header";

// // gsap.registerPlugin(ScrollTrigger);

// // const AboutUs = () => {
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const elements = sectionRef.current.querySelectorAll(".fade-up");
// //     elements.forEach((el) => {
// //       gsap.fromTo(
// //         el,
// //         { y: 60, opacity: 0 },
// //         {
// //           y: 0,
// //           opacity: 1,
// //           duration: 1.2,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: el,
// //             start: "top 85%",
// //           },
// //         }
// //       );
// //     });
// //   }, []);

// //   return (
// //     <>
// //       <Header />

// //       {/* ===================== HERO SECTION ===================== */}
// //       <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
// //         <img
// //           src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
// //           alt="About Hero"
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/60"></div>
// //         <div className="relative z-10 px-6">
// //           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 fade-up">
// //             Empowering{" "}
// //             <span className="text-[#f6df70] italic">Transformation</span>
// //           </h1>
// //           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto fade-up">
// //             We blend strategy, execution, and innovation to help businesses
// //             thrive in an ever-evolving world.
// //           </p>
// //         </div>
// //       </section>

// //       {/* ===================== MAIN ABOUT SECTION ===================== */}
// //       <section
// //         ref={sectionRef}
// //         className="min-h-screen bg-white text-gray-800 py-20 px-6 md:px-20"
// //       >
// //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
// //           <div className="fade-up space-y-6">
// //             <h2 className="text-4xl md:text-5xl font-semibold text-[#c1272d]">
// //               About <span className="text-gray-900">ANTX Consulting</span>
// //             </h2>
// //             <p className="text-lg text-gray-600 leading-relaxed">
// //               At ANTX Consulting, we believe transformation begins with insight
// //               and ends with impact. Our team partners with clients to turn
// //               strategic goals into measurable results, blending innovation,
// //               technology, and people-focused solutions.
// //             </p>
// //             <p className="text-lg text-gray-600 leading-relaxed">
// //               With a global perspective and deep local understanding, we help
// //               organizations embrace change, stay competitive, and achieve
// //               sustainable success.
// //             </p>
// //           </div>

// //           <div className="fade-up">
// //             <img
// //               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
// //               alt="Team collaboration"
// //               className="rounded-2xl shadow-xl w-full object-cover"
// //             />
// //           </div>
// //         </div>

// //         {/* ===================== MISSION / VISION / VALUES ===================== */}
// //         <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-10 text-center">
// //           {[
// //             {
// //               title: "Our Mission",
// //               desc: "To empower organizations with actionable strategies that create lasting value and growth.",
// //               img: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800",
// //             },
// //             {
// //               title: "Our Vision",
// //               desc: "Building a future where businesses operate with purpose, agility, and innovation.",
// //               img: "https://images.pexels.com/photos/3182776/pexels-photo-3182776.jpeg?auto=compress&cs=tinysrgb&w=800",
// //             },
// //             {
// //               title: "Our Values",
// //               desc: "Integrity, collaboration, and excellence are at the heart of everything we do.",
// //               img: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
// //             },
// //           ].map((card, i) => (
// //             <div
// //               key={i}
// //               className="fade-up rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
// //             >
// //               <div className="overflow-hidden">
// //                 <img
// //                   src={card.img}
// //                   alt={card.title}
// //                   className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-700"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <h3 className="text-2xl font-semibold mb-2 text-[#c1272d]">
// //                   {card.title}
// //                 </h3>
// //                 <p className="text-gray-600 text-sm leading-relaxed">
// //                   {card.desc}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* ===================== TEAM SECTION ===================== */}
// //         <div className="max-w-6xl mx-auto mt-28 fade-up">
// //           <h3 className="text-3xl md:text-4xl font-semibold text-center mb-10">
// //             Meet Our <span className="text-[#c1272d] italic">Leadership</span>
// //           </h3>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 name: "Sophia Lee",
// //                 role: "Chief Strategy Officer",
// //                 img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
// //               },
// //               {
// //                 name: "James Carter",
// //                 role: "Head of Operations",
// //                 img: "https://images.unsplash.com/photo-1603415526960-f7e0328a9d51?auto=format&fit=crop&w=800&q=80",
// //               },
// //               {
// //                 name: "Elena Ramirez",
// //                 role: "Technology Director",
// //                 img: "https://images.unsplash.com/photo-1614281200023-1a0b6cfc1b8f?auto=format&fit=crop&w=800&q=80",
// //               },
// //             ].map((member, i) => (
// //               <div
// //                 key={i}
// //                 className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white"
// //               >
// //                 <img
// //                   src={member.img}
// //                   alt={member.name}
// //                   className="w-full h-64 object-cover"
// //                 />
// //                 <div className="p-6 text-center">
// //                   <h4 className="text-xl font-semibold">{member.name}</h4>
// //                   <p className="text-[#c1272d] font-medium text-sm">
// //                     {member.role}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <CTASection />
// //       <Footer />
// //     </>
// //   );
// // };

// // export default AboutUs;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Footer from "../components/Footer";
// import CTASection from "../components/CTA";
// import Header from "../components/Header";

// gsap.registerPlugin(ScrollTrigger);

// const AboutUs = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
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

//   return (
//     <>
//       <Header />

//       {/* ===================== HERO SECTION ===================== */}
//       <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
//           alt="About Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>
//         <div className="relative z-10 px-6">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 fade-up">
//             Empowering{" "}
//             <span className="text-[#f6df70] italic">Transformation</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto fade-up">
//             Growth is not by chance — it’s built on purpose, partnership, and
//             perseverance.
//           </p>
//         </div>
//       </section>

//       {/* ===================== MAIN ABOUT SECTION ===================== */}
//       <section
//         ref={sectionRef}
//         className="min-h-screen bg-white text-gray-800 py-20 px-6 md:px-20"
//       >
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Text */}
//           <div className="fade-up space-y-6">
//             <h2 className="text-4xl md:text-5xl font-semibold text-[#c1272d]">
//               About <span className="text-gray-900">ANTX Consulting</span>
//             </h2>

//             <p className="text-lg text-gray-700 leading-relaxed">
//               At ANTX Consulting, we believe growth is not an act of chance but
//               of
//               <span className="font-semibold text-gray-900">
//                 {" "}
//                 purpose, partnership, and perseverance.
//               </span>
//               Driven by collaboration, guided by intelligence, and committed to
//               building prosperity and a sustainable ecosystem.
//             </p>

//             <p className="text-lg text-gray-700 leading-relaxed">
//               ANTX was set up as a boutique Management Consulting &amp; Business
//               Advisory firm with a strong focus on{" "}
//               <span className="font-semibold text-gray-900">
//                 Execution &amp; Result Assurance.
//               </span>
//               Our value proposition lies in transforming concepts into reality —
//               from strategy and blueprint to execution and delivery.
//             </p>

//             <p className="text-lg text-gray-700 leading-relaxed">
//               The collective experience of our team across Automotive,
//               Engineering, Industrial, and Business Advisory enables us to
//               deliver value by partnering with clients to build{" "}
//               <span className="font-semibold text-gray-900">
//                 resilient and future-ready organizations.
//               </span>
//             </p>

//             <p className="text-lg text-gray-700 leading-relaxed">
//               Our endeavor to be a part of the{" "}
//               <span className="font-semibold text-gray-900">
//                 Clean &amp; Sustainable Mobility
//               </span>{" "}
//               revolution is backed by our extensive experience in the
//               Automotive, Auto-Component, and Electric Vehicle ecosystem. This
//               empowers us to support the conventional industry’s smooth
//               transition into the era of clean mobility.
//             </p>
//           </div>

//           {/* Right Image */}
//           <div className="fade-up">
//             <img
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
//               alt="Team collaboration"
//               className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-700"
//             />
//           </div>
//         </div>

//         {/* ===================== MISSION / VISION / VALUES ===================== */}
//         <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-10 text-center">
//           {[
//             {
//               title: "Our Mission",
//               desc: "To empower organizations with actionable strategies that create lasting value and growth.",
//               img: "https://images.unsplash.com/photo-1522204502601-9fddf3d1fdd0?auto=format&fit=crop&w=800&q=80",
//             },
//             {
//               title: "Our Vision",
//               desc: "Building a future where businesses operate with purpose, agility, and innovation.",
//               img: "https://images.unsplash.com/photo-1573164573938-c9a3a7a1e26f?auto=format&fit=crop&w=800&q=80",
//             },
//             {
//               title: "Our Values",
//               desc: "Integrity, collaboration, and excellence are at the heart of everything we do.",
//               img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className="fade-up rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2 text-[#c1272d]">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ===================== TEAM SECTION ===================== */}
//         <div className="max-w-6xl mx-auto mt-28 fade-up">
//           <h3 className="text-3xl md:text-4xl font-semibold text-center mb-10">
//             Meet Our <span className="text-[#c1272d] italic">Leadership</span>
//           </h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Sophia Lee",
//                 role: "Chief Strategy Officer",
//                 img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
//               },
//               {
//                 name: "James Carter",
//                 role: "Head of Operations",
//                 img: "https://images.unsplash.com/photo-1603415526960-f7e0328a9d51?auto=format&fit=crop&w=800&q=80",
//               },
//               {
//                 name: "Elena Ramirez",
//                 role: "Technology Director",
//                 img: "https://images.unsplash.com/photo-1614281200023-1a0b6cfc1b8f?auto=format&fit=crop&w=800&q=80",
//               },
//             ].map((member, i) => (
//               <div
//                 key={i}
//                 className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white"
//               >
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h4 className="text-xl font-semibold">{member.name}</h4>
//                   <p className="text-[#c1272d] font-medium text-sm">
//                     {member.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTASection />
//       <Footer />
//     </>
//   );
// };

// export default AboutUs;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import CTASection from "../components/CTA";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
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

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 fade-up">
            Empowering{" "}
            <span className="text-[#f6df70] italic">Transformation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto fade-up">
            We blend strategy, execution, and innovation to help businesses
            thrive in an ever-evolving world.
          </p>
        </div>
      </section>

      {/* ===================== ABOUT ANTX CONSULTING ===================== */}
      <section
        ref={sectionRef}
        className="bg-white text-gray-800 py-24 px-6 md:px-20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto space-y-28">
          {/* === SECTION 1 === */}
          <div className="grid md:grid-cols-2 gap-12 items-center fade-up">
            {/* LEFT TEXT */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#c1272d]">
                About <span className="text-gray-900">ANTX Consulting</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At ANTX Consulting, we believe growth is not an act of chance
                but of{" "}
                <span className="font-semibold text-gray-900">
                  purpose, partnership, and perseverance.
                </span>{" "}
                Driven by collaboration, guided by intelligence, and committed
                to building prosperity and a sustainable ecosystem.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ANTX was set up as a boutique Management Consulting &amp;
                Business Advisory firm with a strong focus on{" "}
                <span className="font-semibold text-gray-900">
                  Execution &amp; Result Assurance.
                </span>{" "}
                Our value proposition lies in transforming concepts into reality
                — from strategy and blueprint to execution and delivery.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="fade-up">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="ANTX Strategy Discussion"
                className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* === SECTION 2 === */}
          <div className="grid md:grid-cols-2 gap-12 items-center fade-up">
            {/* LEFT IMAGE */}
            <div className="fade-up order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="ANTX Innovation and Growth"
                className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                The collective experience of our team across Automotive,
                Engineering, Industrial, and Business Advisory enables us to
                deliver value by partnering with clients to build{" "}
                <span className="font-semibold text-gray-900">
                  resilient and future-ready organizations.
                </span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our endeavor to be a part of the{" "}
                <span className="font-semibold text-gray-900">
                  Clean &amp; Sustainable Mobility
                </span>{" "}
                revolution is backed by our extensive experience in the
                Automotive, Auto-Component, and Electric Vehicle ecosystem. This
                empowers us to support the conventional industry’s smooth
                transition into the era of clean mobility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MISSION / VISION / VALUES ===================== */}
      <section className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-10 text-center px-6 md:px-20 mb-20">
        {[
          {
            title: "Our Mission",
            desc: "To empower organizations with actionable strategies that create lasting value and growth.",
            img: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            title: "Our Vision",
            desc: "Building a future where businesses operate with purpose, agility, and innovation.",
            img: "https://images.pexels.com/photos/3182776/pexels-photo-3182776.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            title: "Our Values",
            desc: "Integrity, collaboration, and excellence are at the heart of everything we do.",
            img: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="fade-up rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
          >
            <div className="overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-[#c1272d]">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ===================== TEAM SECTION ===================== */}
      {/* <section className="max-w-6xl mx-auto mt-28 px-6 md:px-20 fade-up">
        <h3 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Meet Our <span className="text-[#c1272d] italic">Leadership</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sophia Lee",
              role: "Chief Strategy Officer",
              img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "James Carter",
              role: "Head of Operations",
              img: "https://images.unsplash.com/photo-1603415526960-f7e0328a9d51?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Elena Ramirez",
              role: "Technology Director",
              img: "https://images.unsplash.com/photo-1614281200023-1a0b6cfc1b8f?auto=format&fit=crop&w=800&q=80",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-[#c1272d] font-medium text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <CTASection />
      <Footer />
    </>
  );
};

export default AboutUs;
