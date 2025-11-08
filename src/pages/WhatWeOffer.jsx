// // // // // // // import React, { useEffect, useRef } from "react";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import gsap from "gsap";
// // // // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // // // // import Header from "../components/Header";
// // // // // // // import Footer from "../components/Footer";
// // // // // // // import CTASection from "../components/CTA";

// // // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // // const WhatWeOffer = () => {
// // // // // // //   const sectionRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const elements = sectionRef.current.querySelectorAll(".fade-up");
// // // // // // //     elements.forEach((el) => {
// // // // // // //       gsap.fromTo(
// // // // // // //         el,
// // // // // // //         { y: 60, opacity: 0 },
// // // // // // //         {
// // // // // // //           y: 0,
// // // // // // //           opacity: 1,
// // // // // // //           duration: 1.2,
// // // // // // //           ease: "power3.out",
// // // // // // //           scrollTrigger: {
// // // // // // //             trigger: el,
// // // // // // //             start: "top 85%",
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );
// // // // // // //     });
// // // // // // //   }, []);

// // // // // // //   const services = [
// // // // // // //     {
// // // // // // //       title: "Strategic Consulting",
// // // // // // //       desc: "We craft bespoke growth strategies, ensuring alignment between business vision, performance goals, and execution excellence.",
// // // // // // //       img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Technology & Digital Transformation",
// // // // // // //       desc: "From data-driven solutions to automation, we help organizations leverage digital ecosystems for maximum efficiency.",
// // // // // // //       img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a2?auto=format&fit=crop&w=1000&q=80",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Operations & Execution Support",
// // // // // // //       desc: "We partner in executing initiatives — from supply chain optimization to process transformation — ensuring measurable success.",
// // // // // // //       img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Leadership & People Development",
// // // // // // //       desc: "Empowering leadership teams through coaching, training, and transformation programs that build high-performance cultures.",
// // // // // // //       img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Header />

// // // // // // //       {/* ===================== HERO SECTION ===================== */}
// // // // // // //       <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
// // // // // // //         <img
// // // // // // //           src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
// // // // // // //           alt="What We Offer Hero"
// // // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // // //         />
// // // // // // //         <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/50"></div>
// // // // // // //         <div className="relative z-10 px-6">
// // // // // // //           <h1 className="text-4xl md:text-6xl font-bold text-white fade-up">
// // // // // // //             What <span className="text-[#f6df70] italic">We Offer</span>
// // // // // // //           </h1>
// // // // // // //           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mt-4 fade-up">
// // // // // // //             Our expertise blends innovation, strategy, and execution to deliver
// // // // // // //             measurable impact across industries.
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ===================== MAIN CONTENT ===================== */}
// // // // // // //       <section
// // // // // // //         ref={sectionRef}
// // // // // // //         className="bg-white text-gray-800 py-20 px-6 md:px-20"
// // // // // // //       >
// // // // // // //         <div className="max-w-6xl mx-auto">
// // // // // // //           <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 fade-up">
// // // // // // //             Our <span className="text-[#c1272d] italic">Core Services</span>
// // // // // // //           </h2>

// // // // // // //           <div className="grid md:grid-cols-2 gap-12">
// // // // // // //             {services.map((service, i) => (
// // // // // // //               <motion.div
// // // // // // //                 key={i}
// // // // // // //                 whileHover={{ scale: 1.02 }}
// // // // // // //                 transition={{ duration: 0.4 }}
// // // // // // //                 className="fade-up rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
// // // // // // //               >
// // // // // // //                 <div className="overflow-hidden">
// // // // // // //                   <img
// // // // // // //                     src={service.img}
// // // // // // //                     alt={service.title}
// // // // // // //                     className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //                 <div className="p-8">
// // // // // // //                   <h3 className="text-2xl font-semibold text-[#c1272d] mb-3">
// // // // // // //                     {service.title}
// // // // // // //                   </h3>
// // // // // // //                   <p className="text-gray-600 text-base leading-relaxed">
// // // // // // //                     {service.desc}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* ===================== PROCESS SECTION ===================== */}
// // // // // // //         <div className="max-w-6xl mx-auto mt-28 fade-up">
// // // // // // //           <h3 className="text-3xl md:text-4xl font-semibold text-center mb-12">
// // // // // // //             Our <span className="text-[#c1272d] italic">Approach</span>
// // // // // // //           </h3>
// // // // // // //           <div className="grid md:grid-cols-4 gap-8 text-center">
// // // // // // //             {[
// // // // // // //               {
// // // // // // //                 step: "01",
// // // // // // //                 title: "Understand",
// // // // // // //                 desc: "We start by deeply understanding your goals, challenges, and vision.",
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 step: "02",
// // // // // // //                 title: "Strategize",
// // // // // // //                 desc: "We create data-driven roadmaps with actionable milestones.",
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 step: "03",
// // // // // // //                 title: "Execute",
// // // // // // //                 desc: "Our experts collaborate to implement strategies seamlessly.",
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 step: "04",
// // // // // // //                 title: "Optimize",
// // // // // // //                 desc: "We measure, refine, and ensure continuous growth and improvement.",
// // // // // // //               },
// // // // // // //             ].map((step, i) => (
// // // // // // //               <div
// // // // // // //                 key={i}
// // // // // // //                 className="bg-[#f6df70]/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
// // // // // // //               >
// // // // // // //                 <h4 className="text-5xl font-bold text-[#c1272d] mb-3">
// // // // // // //                   {step.step}
// // // // // // //                 </h4>
// // // // // // //                 <h5 className="text-xl font-semibold mb-2">{step.title}</h5>
// // // // // // //                 <p className="text-gray-600 text-sm">{step.desc}</p>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* ===================== INDUSTRIES SECTION ===================== */}
// // // // // // //         <div className="max-w-6xl mx-auto mt-28 fade-up">
// // // // // // //           <h3 className="text-3xl md:text-4xl font-semibold text-center mb-12">
// // // // // // //             Industries <span className="text-[#c1272d] italic">We Serve</span>
// // // // // // //           </h3>
// // // // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
// // // // // // //             {[
// // // // // // //               "Automotive",
// // // // // // //               "Technology",
// // // // // // //               "Manufacturing",
// // // // // // //               "Healthcare",
// // // // // // //               "E-Commerce",
// // // // // // //               "Finance",
// // // // // // //               "Public Sector",
// // // // // // //               "Energy",
// // // // // // //             ].map((industry, i) => (
// // // // // // //               <div
// // // // // // //                 key={i}
// // // // // // //                 className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#c1272d] hover:shadow-md transition-all"
// // // // // // //               >
// // // // // // //                 <p className="font-medium text-gray-700">{industry}</p>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       <CTASection />
// // // // // // //       <Footer />
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default WhatWeOffer;

// // // // // // import React, { useEffect, useRef } from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import gsap from "gsap";
// // // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // // // import Header from "../components/Header";
// // // // // // import Footer from "../components/Footer";
// // // // // // import CTASection from "../components/CTA";

// // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // const WhatWeOffer = () => {
// // // // // //   const sectionRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const ctx = gsap.context(() => {
// // // // // //       gsap.utils.toArray(".fade-up").forEach((el) => {
// // // // // //         gsap.fromTo(
// // // // // //           el,
// // // // // //           { y: 60, opacity: 0 },
// // // // // //           {
// // // // // //             y: 0,
// // // // // //             opacity: 1,
// // // // // //             duration: 1.2,
// // // // // //             ease: "power3.out",
// // // // // //             scrollTrigger: {
// // // // // //               trigger: el,
// // // // // //               start: "top 85%",
// // // // // //             },
// // // // // //           }
// // // // // //         );
// // // // // //       });
// // // // // //     }, sectionRef);
// // // // // //     return () => ctx.revert();
// // // // // //   }, []);

// // // // // //   const services = [
// // // // // //     {
// // // // // //       title: "Strategic Consulting",
// // // // // //       desc: "Crafting bespoke strategies that align leadership vision with measurable business growth.",
// // // // // //       img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Technology & Digital Transformation",
// // // // // //       desc: "Empowering organizations through digital transformation, automation, and data intelligence.",
// // // // // //       img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a2?auto=format&fit=crop&w=1000&q=80",
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Operations & Execution Support",
// // // // // //       desc: "End-to-end execution partnerships that ensure operational excellence and delivery precision.",
// // // // // //       img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80",
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Leadership & People Development",
// // // // // //       desc: "Building resilient leadership ecosystems and high-performance teams for the future.",
// // // // // //       img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Header />

// // // // // //       {/* ---------------- HERO SECTION ---------------- */}
// // // // // //       <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
// // // // // //         <motion.img
// // // // // //           src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
// // // // // //           alt="Hero"
// // // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // // //           initial={{ scale: 1.1 }}
// // // // // //           animate={{ scale: 1 }}
// // // // // //           transition={{ duration: 10, ease: "easeOut" }}
// // // // // //         />
// // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

// // // // // //         <div className="relative z-10 text-center px-6">
// // // // // //           <motion.h1
// // // // // //             initial={{ opacity: 0, y: 40 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 1 }}
// // // // // //             className="text-5xl md:text-7xl font-semibold text-white leading-tight"
// // // // // //           >
// // // // // //             What <span className="text-[#f6df70] italic">We Offer</span>
// // // // // //           </motion.h1>
// // // // // //           <motion.p
// // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 1, delay: 0.3 }}
// // // // // //             className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto"
// // // // // //           >
// // // // // //             A blend of strategy, innovation, and hands-on execution — designed
// // // // // //             to transform your business from the inside out.
// // // // // //           </motion.p>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ---------------- CORE SERVICES ---------------- */}
// // // // // //       <section
// // // // // //         ref={sectionRef}
// // // // // //         className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20"
// // // // // //       >
// // // // // //         <div className="max-w-7xl mx-auto">
// // // // // //           <h2 className="text-4xl md:text-5xl font-bold text-center fade-up mb-16">
// // // // // //             Our <span className="text-[#c1272d] italic">Core Services</span>
// // // // // //           </h2>

// // // // // //           <div className="grid md:grid-cols-2 gap-12">
// // // // // //             {services.map((service, i) => (
// // // // // //               <motion.div
// // // // // //                 key={i}
// // // // // //                 whileHover={{ y: -6 }}
// // // // // //                 transition={{ duration: 0.3 }}
// // // // // //                 className="fade-up group relative rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
// // // // // //               >
// // // // // //                 <div className="relative">
// // // // // //                   <img
// // // // // //                     src={service.img}
// // // // // //                     alt={service.title}
// // // // // //                     className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
// // // // // //                   />
// // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#c1272d]/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// // // // // //                 </div>
// // // // // //                 <div className="p-8 relative z-10">
// // // // // //                   <h3 className="text-2xl font-semibold text-[#c1272d] mb-3">
// // // // // //                     {service.title}
// // // // // //                   </h3>
// // // // // //                   <p className="text-gray-700 text-base leading-relaxed">
// // // // // //                     {service.desc}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ---------------- PROCESS SECTION ---------------- */}
// // // // // //       <section className="bg-[#f6df70]/30 py-24">
// // // // // //         <div className="max-w-6xl mx-auto px-6 text-center">
// // // // // //           <h3 className="text-4xl font-bold fade-up mb-16">
// // // // // //             How We <span className="text-[#c1272d] italic">Deliver Impact</span>
// // // // // //           </h3>
// // // // // //           <div className="grid md:grid-cols-4 gap-8">
// // // // // //             {[
// // // // // //               {
// // // // // //                 step: "01",
// // // // // //                 title: "Discover",
// // // // // //                 desc: "We start by understanding your goals, market, and challenges.",
// // // // // //               },
// // // // // //               {
// // // // // //                 step: "02",
// // // // // //                 title: "Design",
// // // // // //                 desc: "We craft a tailored roadmap that aligns strategy with measurable outcomes.",
// // // // // //               },
// // // // // //               {
// // // // // //                 step: "03",
// // // // // //                 title: "Execute",
// // // // // //                 desc: "Our experts turn plans into results through agile and collaborative delivery.",
// // // // // //               },
// // // // // //               {
// // // // // //                 step: "04",
// // // // // //                 title: "Evolve",
// // // // // //                 desc: "We refine continuously to sustain performance and scale impact.",
// // // // // //               },
// // // // // //             ].map((item, i) => (
// // // // // //               <motion.div
// // // // // //                 key={i}
// // // // // //                 whileHover={{ scale: 1.05 }}
// // // // // //                 transition={{ type: "spring", stiffness: 150 }}
// // // // // //                 className="fade-up bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition"
// // // // // //               >
// // // // // //                 <h4 className="text-5xl font-bold text-[#c1272d] mb-3">
// // // // // //                   {item.step}
// // // // // //                 </h4>
// // // // // //                 <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
// // // // // //                 <p className="text-gray-600 text-sm leading-relaxed">
// // // // // //                   {item.desc}
// // // // // //                 </p>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ---------------- INDUSTRIES SECTION ---------------- */}
// // // // // //       <section className="bg-white py-24 px-6 md:px-20 text-center">
// // // // // //         <div className="max-w-6xl mx-auto">
// // // // // //           <h3 className="text-4xl md:text-5xl font-bold fade-up mb-14">
// // // // // //             Industries <span className="text-[#c1272d] italic">We Serve</span>
// // // // // //           </h3>

// // // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-up">
// // // // // //             {[
// // // // // //               "Automotive",
// // // // // //               "Technology",
// // // // // //               "Manufacturing",
// // // // // //               "Healthcare",
// // // // // //               "E-Commerce",
// // // // // //               "Finance",
// // // // // //               "Public Sector",
// // // // // //               "Energy",
// // // // // //             ].map((item, i) => (
// // // // // //               <motion.div
// // // // // //                 key={i}
// // // // // //                 whileHover={{ scale: 1.05 }}
// // // // // //                 transition={{ duration: 0.3 }}
// // // // // //                 className="p-8 bg-gradient-to-b from-white to-[#f6df70]/10 border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
// // // // // //               >
// // // // // //                 <p className="font-medium text-gray-800">{item}</p>
// // // // // //               </motion.div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       <CTASection />
// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default WhatWeOffer;

// // // // // import React, { useEffect, useRef } from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import gsap from "gsap";
// // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // // import Header from "../components/Header";
// // // // // import Footer from "../components/Footer";
// // // // // import CTASection from "../components/CTA";

// // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // const WhatWeOffer = () => {
// // // // //   const sectionRef = useRef(null);
// // // // //   const heroRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     // hero parallax animation
// // // // //     gsap.to(heroRef.current, {
// // // // //       yPercent: 15,
// // // // //       ease: "none",
// // // // //       scrollTrigger: {
// // // // //         trigger: heroRef.current,
// // // // //         start: "top bottom",
// // // // //         scrub: true,
// // // // //       },
// // // // //     });

// // // // //     // scroll-in animations
// // // // //     const elements = sectionRef.current.querySelectorAll(".fade-up");
// // // // //     elements.forEach((el) => {
// // // // //       gsap.fromTo(
// // // // //         el,
// // // // //         { y: 50, opacity: 0 },
// // // // //         {
// // // // //           y: 0,
// // // // //           opacity: 1,
// // // // //           duration: 1.2,
// // // // //           ease: "power3.out",
// // // // //           scrollTrigger: {
// // // // //             trigger: el,
// // // // //             start: "top 85%",
// // // // //           },
// // // // //         }
// // // // //       );
// // // // //     });
// // // // //   }, []);

// // // // //   const services = [
// // // // //     {
// // // // //       title: "Strategic Consulting",
// // // // //       desc: "We transform complex business challenges into actionable growth strategies that align people, processes, and vision.",
// // // // //       img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
// // // // //     },
// // // // //     {
// // // // //       title: "Digital Transformation",
// // // // //       desc: "Empowering organizations with automation, data insights, and digital-first ecosystems to scale efficiently.",
// // // // //       img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1000&q=80",
// // // // //     },
// // // // //     {
// // // // //       title: "Operational Excellence",
// // // // //       desc: "Streamlining processes, optimizing resources, and embedding resilience for sustainable business growth.",
// // // // //       img: "https://images.unsplash.com/photo-1581092334651-ddf26d9c1627?auto=format&fit=crop&w=1000&q=80",
// // // // //     },
// // // // //     {
// // // // //       title: "Leadership & Culture",
// // // // //       desc: "We shape future-ready leaders through coaching, culture building, and organizational development.",
// // // // //       img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       <Header />

// // // // //       {/* === HERO SECTION === */}
// // // // //       <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
// // // // //         <motion.img
// // // // //           ref={heroRef}
// // // // //           src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
// // // // //           alt="Hero background"
// // // // //           className="absolute inset-0 w-full h-full object-cover"
// // // // //         />

// // // // //         {/* moving gradient overlay */}
// // // // //         <motion.div
// // // // //           className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
// // // // //           animate={{
// // // // //             backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
// // // // //           }}
// // // // //           transition={{
// // // // //             duration: 12,
// // // // //             ease: "linear",
// // // // //             repeat: Infinity,
// // // // //           }}
// // // // //           style={{
// // // // //             backgroundSize: "200% 200%",
// // // // //           }}
// // // // //         />

// // // // //         <div className="relative z-10 text-center px-6">
// // // // //           <motion.h1
// // // // //             initial={{ opacity: 0, y: 30 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 1 }}
// // // // //             className="text-5xl md:text-7xl font-bold text-white tracking-tight"
// // // // //           >
// // // // //             What <span className="text-[#f6df70] italic">We Offer</span>
// // // // //           </motion.h1>
// // // // //           <motion.p
// // // // //             initial={{ opacity: 0, y: 20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 1, delay: 0.3 }}
// // // // //             className="text-gray-200 text-lg md:text-xl mt-4 max-w-2xl mx-auto"
// // // // //           >
// // // // //             Delivering transformation through innovation, strategy, and
// // // // //             execution — built for tomorrow’s challenges.
// // // // //           </motion.p>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* === SERVICES GRID === */}
// // // // //       <section
// // // // //         ref={sectionRef}
// // // // //         className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20"
// // // // //       >
// // // // //         <div className="max-w-7xl mx-auto">
// // // // //           <h2 className="text-4xl md:text-5xl font-semibold text-center fade-up mb-16">
// // // // //             Our <span className="text-[#c1272d] italic">Expertise</span>
// // // // //           </h2>

// // // // //           <div className="grid md:grid-cols-2 gap-12">
// // // // //             {services.map((service, i) => (
// // // // //               <motion.div
// // // // //                 key={i}
// // // // //                 whileHover={{ scale: 1.02, rotate: 0.5 }}
// // // // //                 transition={{ type: "spring", stiffness: 150 }}
// // // // //                 className="fade-up group relative rounded-3xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
// // // // //               >
// // // // //                 <div className="relative overflow-hidden">
// // // // //                   <motion.img
// // // // //                     src={service.img}
// // // // //                     alt={service.title}
// // // // //                     className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
// // // // //                   />
// // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#c1272d]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// // // // //                 </div>

// // // // //                 <div className="p-8">
// // // // //                   <h3 className="text-2xl font-bold text-[#c1272d] mb-3 tracking-tight">
// // // // //                     {service.title}
// // // // //                   </h3>
// // // // //                   <p className="text-gray-700 leading-relaxed text-base">
// // // // //                     {service.desc}
// // // // //                   </p>
// // // // //                 </div>

// // // // //                 <div className="absolute bottom-6 right-6">
// // // // //                   <motion.span
// // // // //                     whileHover={{ rotate: 45 }}
// // // // //                     className="text-[#c1272d] border-2 border-[#c1272d] p-2 rounded-full text-lg font-bold transition-all"
// // // // //                   >
// // // // //                     ↗
// // // // //                   </motion.span>
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* === PROCESS SECTION === */}
// // // // //       <section className="bg-[#f6df70]/40 py-24">
// // // // //         <div className="max-w-6xl mx-auto text-center px-6">
// // // // //           <h3 className="text-4xl font-bold fade-up mb-16">
// // // // //             Our{" "}
// // // // //             <span className="text-[#c1272d] italic">Execution Framework</span>
// // // // //           </h3>

// // // // //           <div className="grid md:grid-cols-4 gap-8">
// // // // //             {[
// // // // //               {
// // // // //                 step: "01",
// // // // //                 title: "Discover",
// // // // //                 desc: "Understand goals, insights & opportunities",
// // // // //               },
// // // // //               {
// // // // //                 step: "02",
// // // // //                 title: "Design",
// // // // //                 desc: "Develop strategies that are actionable",
// // // // //               },
// // // // //               {
// // // // //                 step: "03",
// // // // //                 title: "Deliver",
// // // // //                 desc: "Implement seamlessly with precision",
// // // // //               },
// // // // //               {
// // // // //                 step: "04",
// // // // //                 title: "Evolve",
// // // // //                 desc: "Optimize continuously for long-term success",
// // // // //               },
// // // // //             ].map((item, i) => (
// // // // //               <motion.div
// // // // //                 key={i}
// // // // //                 whileHover={{ y: -8, scale: 1.03 }}
// // // // //                 transition={{ duration: 0.3 }}
// // // // //                 className="fade-up bg-white rounded-xl p-8 shadow-md hover:shadow-xl border-t-4 border-[#c1272d]/70"
// // // // //               >
// // // // //                 <h4 className="text-5xl font-bold text-[#c1272d] mb-2">
// // // // //                   {item.step}
// // // // //                 </h4>
// // // // //                 <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
// // // // //                 <p className="text-gray-600 text-sm leading-relaxed">
// // // // //                   {item.desc}
// // // // //                 </p>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* === INDUSTRIES === */}
// // // // //       <section className="bg-white py-24 px-6 md:px-20">
// // // // //         <div className="max-w-6xl mx-auto text-center">
// // // // //           <h3 className="text-4xl md:text-5xl font-semibold fade-up mb-12">
// // // // //             Industries <span className="text-[#c1272d] italic">We Empower</span>
// // // // //           </h3>
// // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-up">
// // // // //             {[
// // // // //               "Automotive",
// // // // //               "Technology",
// // // // //               "Manufacturing",
// // // // //               "Healthcare",
// // // // //               "Finance",
// // // // //               "Public Sector",
// // // // //               "Energy",
// // // // //               "E-Commerce",
// // // // //             ].map((industry, i) => (
// // // // //               <motion.div
// // // // //                 key={i}
// // // // //                 whileHover={{ scale: 1.08 }}
// // // // //                 transition={{ duration: 0.3 }}
// // // // //                 className="rounded-xl bg-gradient-to-b from-white to-[#f6df70]/20 p-8 border border-gray-200 shadow-sm hover:shadow-md"
// // // // //               >
// // // // //                 <p className="font-medium text-gray-800">{industry}</p>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       <CTASection />
// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default WhatWeOffer;

// // // // import React, { useEffect, useRef } from "react";
// // // // import { motion } from "framer-motion";
// // // // import gsap from "gsap";
// // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // import Header from "../components/Header";
// // // // import Footer from "../components/Footer";
// // // // import CTASection from "../components/CTA";

// // // // gsap.registerPlugin(ScrollTrigger);

// // // // const WhatWeOffer = () => {
// // // //   const sectionRef = useRef(null);
// // // //   const heroImgRef = useRef(null);

// // // //   useEffect(() => {
// // // //     // Parallax effect for hero image
// // // //     gsap.to(heroImgRef.current, {
// // // //       scale: 1.1,
// // // //       yPercent: 10,
// // // //       ease: "none",
// // // //       scrollTrigger: {
// // // //         trigger: heroImgRef.current,
// // // //         start: "top bottom",
// // // //         scrub: true,
// // // //       },
// // // //     });

// // // //     // Scroll fade-up animations
// // // //     const elements = sectionRef.current.querySelectorAll(".fade-up");
// // // //     elements.forEach((el) => {
// // // //       gsap.fromTo(
// // // //         el,
// // // //         { y: 60, opacity: 0 },
// // // //         {
// // // //           y: 0,
// // // //           opacity: 1,
// // // //           duration: 1.2,
// // // //           ease: "power3.out",
// // // //           scrollTrigger: {
// // // //             trigger: el,
// // // //             start: "top 85%",
// // // //           },
// // // //         }
// // // //       );
// // // //     });
// // // //   }, []);

// // // //   const services = [
// // // //     {
// // // //       title: "Strategic Consulting",
// // // //       desc: "Transform complex business challenges into actionable strategies that align people, processes, and purpose.",
// // // //       img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
// // // //     },
// // // //     {
// // // //       title: "Digital Transformation",
// // // //       desc: "Empowering organizations with automation, data intelligence, and digital-first ecosystems for scalable growth.",
// // // //       img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1000&q=80",
// // // //     },
// // // //     {
// // // //       title: "Operational Excellence",
// // // //       desc: "Streamlining processes, optimizing performance, and embedding resilience for long-term efficiency.",
// // // //       img: "https://images.unsplash.com/photo-1581092334651-ddf26d9c1627?auto=format&fit=crop&w=1000&q=80",
// // // //     },
// // // //     {
// // // //       title: "Leadership & Culture",
// // // //       desc: "Building people-first leadership, culture, and change management strategies to drive innovation and engagement.",
// // // //       img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <Header />

// // // //       {/* === HERO SECTION === */}
// // // //       <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
// // // //         <motion.img
// // // //           ref={heroImgRef}
// // // //           src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
// // // //           alt="Consulting Hero"
// // // //           className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
// // // //         />

// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ duration: 1.2 }}
// // // //           className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"
// // // //         />

// // // //         <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
// // // //           <motion.h1
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1 }}
// // // //             className="text-5xl md:text-7xl font-bold text-white leading-tight"
// // // //           >
// // // //             What <span className="text-[#f6df70] italic">We Offer</span>
// // // //           </motion.h1>
// // // //           <motion.p
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1, delay: 0.3 }}
// // // //             className="text-gray-200 text-lg md:text-xl mt-5 leading-relaxed"
// // // //           >
// // // //             Innovative solutions crafted for real-world transformation — merging
// // // //             strategy, technology, and human potential.
// // // //           </motion.p>
// // // //         </div>
// // // //       </section>

// // // //       {/* === SERVICES GRID === */}
// // // //       <section
// // // //         ref={sectionRef}
// // // //         className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20"
// // // //       >
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <h2 className="text-4xl md:text-5xl font-semibold text-center fade-up mb-16">
// // // //             Our <span className="text-[#c1272d] italic">Expertise</span>
// // // //           </h2>

// // // //           <div className="grid md:grid-cols-2 gap-12">
// // // //             {services.map((service, i) => (
// // // //               <motion.div
// // // //                 key={i}
// // // //                 whileHover={{ scale: 1.02 }}
// // // //                 transition={{ type: "spring", stiffness: 150 }}
// // // //                 className="fade-up group relative rounded-3xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
// // // //               >
// // // //                 <div className="relative overflow-hidden">
// // // //                   <motion.img
// // // //                     src={service.img}
// // // //                     alt={service.title}
// // // //                     className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
// // // //                   />
// // // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#c1272d]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// // // //                 </div>

// // // //                 <div className="p-8">
// // // //                   <h3 className="text-2xl font-bold text-[#c1272d] mb-3 tracking-tight">
// // // //                     {service.title}
// // // //                   </h3>
// // // //                   <p className="text-gray-700 leading-relaxed text-base">
// // // //                     {service.desc}
// // // //                   </p>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* === PROCESS SECTION === */}
// // // //       <section className="bg-[#f6df70]/40 py-24">
// // // //         <div className="max-w-6xl mx-auto text-center px-6">
// // // //           <h3 className="text-4xl font-bold fade-up mb-16">
// // // //             Our{" "}
// // // //             <span className="text-[#c1272d] italic">Execution Framework</span>
// // // //           </h3>

// // // //           <div className="grid md:grid-cols-4 gap-8">
// // // //             {[
// // // //               {
// // // //                 step: "01",
// // // //                 title: "Discover",
// // // //                 desc: "Understanding goals and insights.",
// // // //               },
// // // //               {
// // // //                 step: "02",
// // // //                 title: "Design",
// // // //                 desc: "Creating strategic, scalable solutions.",
// // // //               },
// // // //               {
// // // //                 step: "03",
// // // //                 title: "Deliver",
// // // //                 desc: "Executing with precision and agility.",
// // // //               },
// // // //               {
// // // //                 step: "04",
// // // //                 title: "Evolve",
// // // //                 desc: "Continuous optimization for impact.",
// // // //               },
// // // //             ].map((item, i) => (
// // // //               <motion.div
// // // //                 key={i}
// // // //                 whileHover={{ y: -8, scale: 1.03 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //                 className="fade-up bg-white rounded-xl p-8 shadow-md hover:shadow-xl border-t-4 border-[#c1272d]/70"
// // // //               >
// // // //                 <h4 className="text-5xl font-bold text-[#c1272d] mb-2">
// // // //                   {item.step}
// // // //                 </h4>
// // // //                 <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
// // // //                 <p className="text-gray-600 text-sm leading-relaxed">
// // // //                   {item.desc}
// // // //                 </p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* === INDUSTRIES SECTION === */}
// // // //       <section className="bg-white py-24 px-6 md:px-20">
// // // //         <div className="max-w-6xl mx-auto text-center">
// // // //           <h3 className="text-4xl md:text-5xl font-semibold fade-up mb-12">
// // // //             Industries <span className="text-[#c1272d] italic">We Empower</span>
// // // //           </h3>
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-up">
// // // //             {[
// // // //               "Automotive",
// // // //               "Technology",
// // // //               "Manufacturing",
// // // //               "Healthcare",
// // // //               "Finance",
// // // //               "Public Sector",
// // // //               "Energy",
// // // //               "E-Commerce",
// // // //             ].map((industry, i) => (
// // // //               <motion.div
// // // //                 key={i}
// // // //                 whileHover={{ scale: 1.08 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //                 className="rounded-xl bg-gradient-to-b from-white to-[#f6df70]/20 p-8 border border-gray-200 shadow-sm hover:shadow-md"
// // // //               >
// // // //                 <p className="font-medium text-gray-800">{industry}</p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <CTASection />
// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // };

// // // // export default WhatWeOffer;

// // // import React, { useEffect, useRef } from "react";
// // // import { motion } from "framer-motion";
// // // import gsap from "gsap";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // import Header from "../components/Header";
// // // import Footer from "../components/Footer";
// // // import CTASection from "../components/CTA";

// // // gsap.registerPlugin(ScrollTrigger);

// // // const WhatWeOffer = () => {
// // //   const sectionRef = useRef(null);
// // //   const heroImgRef = useRef(null);

// // //   useEffect(() => {
// // //     // Parallax effect
// // //     gsap.to(heroImgRef.current, {
// // //       scale: 1.1,
// // //       yPercent: 10,
// // //       ease: "none",
// // //       scrollTrigger: {
// // //         trigger: heroImgRef.current,
// // //         start: "top bottom",
// // //         scrub: true,
// // //       },
// // //     });

// // //     // Scroll fade-up
// // //     const elements = sectionRef.current.querySelectorAll(".fade-up");
// // //     elements.forEach((el) => {
// // //       gsap.fromTo(
// // //         el,
// // //         { y: 60, opacity: 0 },
// // //         {
// // //           y: 0,
// // //           opacity: 1,
// // //           duration: 1.2,
// // //           ease: "power3.out",
// // //           scrollTrigger: {
// // //             trigger: el,
// // //             start: "top 85%",
// // //           },
// // //         }
// // //       );
// // //     });
// // //   }, []);

// // //   const services = [
// // //     {
// // //       title: "Strategic Planning for Medium-Sized Businesses",
// // //       desc: "ANTX helps medium-sized enterprises map a clear direction and turn ambitions into measurable outcomes. From strategy formulation and goal setting to policy deployment and performance management, we ensure alignment, accountability, and sustained business discipline.",
// // //       img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
// // //     },
// // //     {
// // //       title: "Diversification for Multi-Dimensional Growth",
// // //       desc: "We partner with organizations to unlock new growth opportunities and manage market transitions effectively. ANTX develops and executes diversification strategies, enabling entry into new markets and technology domains while mitigating risk and driving innovation.",
// // //       img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1000&q=80",
// // //     },
// // //     {
// // //       title: "Operations Excellence for Profitable Growth",
// // //       desc: "We align operations with strategy to improve efficiency, strengthen resilience, and enhance profitability. Through process re-engineering, cost optimization, and risk management frameworks, ANTX helps businesses build scalable, sustainable operational models.",
// // //       img: "https://images.unsplash.com/photo-1581091215367-59ab6c1b3c5b?auto=format&fit=crop&w=1000&q=80",
// // //     },
// // //   ];

// // //   const valuePoints = [
// // //     {
// // //       title: "Customized Solutions",
// // //       desc: "Every engagement is tailored to your unique context, ensuring actionable, scalable, and sustainable results.",
// // //     },
// // //     {
// // //       title: "End-to-End Support",
// // //       desc: "From strategy formulation to execution and continuous improvement — we stay with you at every stage.",
// // //     },
// // //     {
// // //       title: "Sustainable Impact",
// // //       desc: "ANTX creates lasting business transformation, helping medium-sized firms thrive in dynamic markets.",
// // //     },
// // //   ];

// // //   return (
// // //     <>
// // //       <Header />

// // //       {/* === HERO SECTION === */}
// // //       <section className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-black">
// // //         <motion.img
// // //           ref={heroImgRef}
// // //           src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
// // //           alt="ANTX Consulting Hero"
// // //           className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
// // //         />

// // //         <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
// // //           <motion.h1
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 1 }}
// // //             className="text-5xl md:text-7xl font-bold text-white leading-tight"
// // //           >
// // //             What <span className="text-[#f6df70] italic">ANTX Offers</span>
// // //           </motion.h1>
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 1, delay: 0.3 }}
// // //             className="text-gray-200 text-lg md:text-xl mt-5 leading-relaxed"
// // //           >
// // //             Tailored and on-demand consulting services helping startups and
// // //             medium-sized businesses achieve growth, diversification, and
// // //             operational excellence through strategic innovation and execution.
// // //           </motion.p>
// // //         </div>
// // //       </section>

// // //       {/* === SERVICES SECTION === */}
// // //       <section
// // //         ref={sectionRef}
// // //         className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20"
// // //       >
// // //         <div className="max-w-7xl mx-auto">
// // //           <h2 className="text-4xl md:text-5xl font-semibold text-center fade-up mb-16">
// // //             Our <span className="text-[#c1272d] italic">Core Offerings</span>
// // //           </h2>

// // //           <div className="grid md:grid-cols-3 gap-12">
// // //             {services.map((service, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 whileHover={{ scale: 1.02 }}
// // //                 transition={{ type: "spring", stiffness: 150 }}
// // //                 className="fade-up group relative rounded-3xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
// // //               >
// // //                 <div className="relative overflow-hidden">
// // //                   <motion.img
// // //                     src={service.img}
// // //                     alt={service.title}
// // //                     className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
// // //                   />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#c1272d]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// // //                 </div>

// // //                 <div className="p-8">
// // //                   <h3 className="text-2xl font-bold text-[#c1272d] mb-3 tracking-tight">
// // //                     {service.title}
// // //                   </h3>
// // //                   <p className="text-gray-700 leading-relaxed text-base">
// // //                     {service.desc}
// // //                   </p>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* === VALUE SECTION === */}
// // //       <section className="bg-[#f6df70]/30 py-24 px-6 md:px-20">
// // //         <div className="max-w-6xl mx-auto text-center">
// // //           <h3 className="text-4xl font-bold fade-up mb-16">
// // //             How <span className="text-[#c1272d] italic">ANTX Adds Value</span>
// // //           </h3>

// // //           <div className="grid md:grid-cols-3 gap-10">
// // //             {valuePoints.map((point, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 whileHover={{ y: -8, scale: 1.03 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 className="fade-up bg-white rounded-2xl p-10 shadow-md hover:shadow-xl border-t-4 border-[#c1272d]/70"
// // //               >
// // //                 <h4 className="text-xl font-semibold mb-3 text-[#c1272d]">
// // //                   {point.title}
// // //                 </h4>
// // //                 <p className="text-gray-700 text-base leading-relaxed">
// // //                   {point.desc}
// // //                 </p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <CTASection />
// // //       <Footer />
// // //     </>
// // //   );
// // // };

// // // export default WhatWeOffer;

// // import React, { useEffect, useRef } from "react";
// // import { motion } from "framer-motion";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Header from "../components/Header";
// // import Footer from "../components/Footer";
// // import CTASection from "../components/CTA";

// // gsap.registerPlugin(ScrollTrigger);

// // const WhatWeOffer = () => {
// //   const sectionRef = useRef(null);
// //   const heroImgRef = useRef(null);

// //   useEffect(() => {
// //     // Parallax effect for hero image
// //     gsap.to(heroImgRef.current, {
// //       scale: 1.1,
// //       yPercent: 10,
// //       ease: "none",
// //       scrollTrigger: {
// //         trigger: heroImgRef.current,
// //         start: "top bottom",
// //         scrub: true,
// //       },
// //     });

// //     // Scroll fade-up animation
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

// //   const services = [
// //     {
// //       title: "Strategic Planning for Medium-Sized Businesses",
// //       img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
// //       desc: `ANTX assists medium-sized enterprises in mapping a clear strategic direction and converting ambitions into achievable outcomes.
// //       Services include:
// //       • Business strategy formulation to ensure alignment with market dynamics and company vision.
// //       • Long-term goal setting and strategic business planning, supporting organizations in setting actionable, measurable milestones.
// //       • Development of Annual Operating Plans (AOP) and budgets to drive disciplined execution and performance tracking.
// //       • Policy deployment and performance management frameworks to embed a culture of accountability and continuous improvement.`,
// //     },
// //     {
// //       title: "Diversification for Multi-Dimensional Growth",
// //       img: "https://images.unsplash.com/photo-1573164573938-c9a3a7a1e26f?auto=format&fit=crop&w=1000&q=80",
// //       desc: `Recognizing the dynamic business landscape, ANTX partners with medium-sized businesses to unlock new growth opportunities through diversification and market expansion.
// //       The firm enables organizations to:
// //       • Develop and implement robust growth and diversification strategies that mitigate risk and tap into emerging opportunities.
// //       • Design and execute comprehensive business plans for entering new markets or segments.
// //       • Strategically transition products, markets, and technologies to remain relevant and competitive.`,
// //     },
// //     {
// //       title: "Operations Excellence for Profitable Growth",
// //       img: "https://images.unsplash.com/photo-1581092334651-ddf26d9c1627?auto=format&fit=crop&w=1000&q=80",
// //       desc: `To maximize operational effectiveness, ANTX offers solutions that align operations with strategic objectives and foster long-term profitability.
// //       Key offerings include:
// //       • Operations strategy design for building resilient, adaptive business models.
// //       • Thorough review and re-engineering of business processes to increase efficiency and eliminate bottlenecks.
// //       • Development and implementation of risk management frameworks to identify, assess, and mitigate business threats.
// //       • Profitability improvement programs targeting cost optimization and margin enhancement.`,
// //     },
// //   ];

// //   const valueAdd = [
// //     {
// //       title: "Customized Solutions",
// //       desc: "Every engagement is tailored to the unique needs and context of medium-sized businesses, ensuring practical and scalable outcomes.",
// //     },
// //     {
// //       title: "End-to-End Support",
// //       desc: "From vision and strategy formulation to execution and performance monitoring, ANTX delivers hands-on guidance at every stage.",
// //     },
// //     {
// //       title: "Sustainable Impact",
// //       desc: "With a focus on measurable results and long-term transformation, ANTX empowers medium-sized businesses to thrive even in challenging environments.",
// //     },
// //   ];

// //   return (
// //     <>
// //       <Header />

// //       {/* === HERO SECTION === */}
// //       <section className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-black">
// //         <motion.img
// //           ref={heroImgRef}
// //           src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
// //           alt="ANTX Consulting Hero"
// //           className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
// //         />

// //         <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
// //           <motion.h1
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1 }}
// //             className="text-5xl md:text-7xl font-bold text-white leading-tight"
// //           >
// //             What <span className="text-[#f6df70] italic">ANTX Offers</span>
// //           </motion.h1>
// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1, delay: 0.3 }}
// //             className="text-gray-200 text-lg md:text-xl mt-5 leading-relaxed"
// //           >
// //             ANTX offers tailored and on-demand consulting services designed to
// //             help startups and medium-sized businesses — domestic and overseas —
// //             achieve competitive edge, resilience, and sustainable growth through
// //             integrated strategy, diversification, and operational excellence.
// //           </motion.p>
// //         </div>
// //       </section>

// //       {/* === SERVICES SECTION === */}
// //       <section
// //         ref={sectionRef}
// //         className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20"
// //       >
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-4xl md:text-5xl font-semibold text-center fade-up mb-16">
// //             Our <span className="text-[#c1272d] italic">Core Offerings</span>
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-12">
// //             {services.map((service, i) => (
// //               <motion.div
// //                 key={i}
// //                 whileHover={{ scale: 1.02 }}
// //                 transition={{ type: "spring", stiffness: 150 }}
// //                 className="fade-up group relative rounded-3xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
// //               >
// //                 <div className="relative overflow-hidden">
// //                   <motion.img
// //                     src={service.img}
// //                     alt={service.title}
// //                     className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-[#c1272d]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //                 </div>

// //                 <div className="p-8 text-left">
// //                   <h3 className="text-2xl font-bold text-[#c1272d] mb-3 tracking-tight">
// //                     {service.title}
// //                   </h3>
// //                   <p className="text-gray-700 leading-relaxed whitespace-pre-line">
// //                     {service.desc}
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* === VALUE SECTION === */}
// //       <section className="bg-[#f6df70]/40 py-24 px-6 md:px-20">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <h3 className="text-4xl font-bold fade-up mb-16">
// //             How <span className="text-[#c1272d] italic">ANTX Adds Value</span>
// //           </h3>

// //           <div className="grid md:grid-cols-3 gap-10">
// //             {valueAdd.map((v, i) => (
// //               <motion.div
// //                 key={i}
// //                 whileHover={{ y: -8, scale: 1.03 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="fade-up bg-white rounded-2xl p-10 shadow-md hover:shadow-xl border-t-4 border-[#c1272d]/70"
// //               >
// //                 <h4 className="text-xl font-semibold mb-3 text-[#c1272d]">
// //                   {v.title}
// //                 </h4>
// //                 <p className="text-gray-700 text-base leading-relaxed">
// //                   {v.desc}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>

// //           <p className="fade-up mt-16 text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
// //             ANTX stands as a strategic partner for medium-sized companies,
// //             offering holistic solutions that drive growth, diversification, and
// //             operational excellence.
// //           </p>
// //         </div>
// //       </section>

// //       <CTASection />
// //       <Footer />
// //     </>
// //   );
// // };

// // export default WhatWeOffer;

// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import CTASection from "../components/CTA";

// gsap.registerPlugin(ScrollTrigger);

// const WhatWeOffer = () => {
//   const sectionRef = useRef(null);
//   const heroImgRef = useRef(null);

//   useEffect(() => {
//     // Hero Parallax
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
//     const elements = sectionRef.current?.querySelectorAll(".fade-up") || [];
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

//       {/* === HERO SECTION === */}
//       <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">
//         <motion.img
//           ref={heroImgRef}
//           src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
//           alt="Consulting Hero"
//           className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
//         />

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"
//         />

//         <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-5xl md:text-7xl font-bold text-white leading-tight"
//           >
//             What <span className="text-[#f6df70] italic">We Offer</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-gray-200 text-lg md:text-xl mt-5 leading-relaxed"
//           >
//             Tailored consulting and operational excellence — helping businesses
//             build resilience, scale sustainably, and innovate confidently.
//           </motion.p>
//         </div>
//       </section>

//       {/* === INTRO SECTION === */}
//       <section
//         ref={sectionRef}
//         className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20"
//       >
//         <div className="max-w-6xl mx-auto text-center mb-16 fade-up">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Why Choose <span className="text-[#c1272d] italic">ANTX</span>?
//           </h2>
//           <p className="mt-6 text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
//             ANTX offers tailored and on-demand consulting services designed to
//             help startups and medium-sized businesses — domestic and overseas —
//             achieve competitive edge, supply chain resilience, and sustainable
//             growth through integrated strategy, diversification, and operational
//             excellence.
//           </p>
//         </div>

//         {/* === CORE OFFERINGS === */}
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center fade-up mb-20">
//             Our <span className="text-[#c1272d] italic">Core Offerings</span>
//           </h2>

//           {/* === STRATEGIC PLANNING === */}
//           <div className="grid md:grid-cols-2 gap-12 items-center mb-24 fade-up">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -60 }}
//               transition={{ duration: 1 }}
//               className="space-y-6"
//             >
//               <h3 className="text-3xl font-semibold text-[#c1272d]">
//                 Strategic Planning for Medium-Sized Businesses
//               </h3>
//               <p className="text-gray-700 leading-relaxed">
//                 ANTX assists medium-sized enterprises in mapping a clear
//                 strategic direction and converting ambitions into achievable
//                 outcomes.
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   Business strategy formulation aligned with market dynamics and
//                   company vision.
//                 </li>
//                 <li>
//                   Long-term goal setting and actionable strategic planning for
//                   measurable outcomes.
//                 </li>
//                 <li>
//                   Development of Annual Operating Plans (AOP) and budgets for
//                   disciplined execution.
//                 </li>
//                 <li>
//                   Policy deployment and performance management frameworks
//                   promoting accountability and improvement.
//                 </li>
//               </ul>
//             </motion.div>

//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 60 }}
//               transition={{ duration: 1 }}
//               className="relative rounded-2xl overflow-hidden shadow-lg"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80"
//                 alt="Strategic Planning"
//                 className="object-cover w-full h-[380px] hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#c1272d]/30 to-transparent"></div>
//             </motion.div>
//           </div>

//           {/* === DIVERSIFICATION === */}
//           <div className="grid md:grid-cols-2 gap-12 items-center mb-24 fade-up">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 60 }}
//               transition={{ duration: 1 }}
//               className="relative rounded-2xl overflow-hidden shadow-lg order-2 md:order-1"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1573164573938-c9a3a7a1e26f?auto=format&fit=crop&w=1000&q=80"
//                 alt="Diversification Growth"
//                 className="object-cover w-full h-[380px] hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#c1272d]/30 to-transparent"></div>
//             </motion.div>

//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -60 }}
//               transition={{ duration: 1 }}
//               className="space-y-6 order-1 md:order-2"
//             >
//               <h3 className="text-3xl font-semibold text-[#c1272d]">
//                 Diversification for Multi-Dimensional Growth
//               </h3>
//               <p className="text-gray-700 leading-relaxed">
//                 Recognizing the dynamic business landscape, ANTX partners with
//                 medium-sized businesses to unlock new growth opportunities
//                 through diversification and market expansion.
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   Develop and implement growth and diversification strategies to
//                   mitigate risk.
//                 </li>
//                 <li>
//                   Design and execute business plans for entering new markets or
//                   segments.
//                 </li>
//                 <li>
//                   Strategically transition products, markets, and technologies
//                   to stay competitive.
//                 </li>
//               </ul>
//             </motion.div>
//           </div>

//           {/* === OPERATIONS EXCELLENCE === */}
//           <div className="grid md:grid-cols-2 gap-12 items-center fade-up">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -60 }}
//               transition={{ duration: 1 }}
//               className="space-y-6"
//             >
//               <h3 className="text-3xl font-semibold text-[#c1272d]">
//                 Operations Excellence for Profitable Growth
//               </h3>
//               <p className="text-gray-700 leading-relaxed">
//                 ANTX offers solutions that align operations with strategic
//                 objectives and foster long-term profitability.
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   Design resilient and adaptive operational strategies for
//                   evolving business models.
//                 </li>
//                 <li>
//                   Re-engineer processes to enhance efficiency and eliminate
//                   bottlenecks.
//                 </li>
//                 <li>
//                   Develop and implement risk management frameworks for proactive
//                   mitigation.
//                 </li>
//                 <li>
//                   Run profitability improvement programs focusing on cost
//                   optimization and margin enhancement.
//                 </li>
//               </ul>
//             </motion.div>

//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 60 }}
//               transition={{ duration: 1 }}
//               className="relative rounded-2xl overflow-hidden shadow-lg"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1581091215367-59ab6b5bb96f?auto=format&fit=crop&w=1000&q=80"
//                 alt="Operations Excellence"
//                 className="object-cover w-full h-[380px] hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#c1272d]/30 to-transparent"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <CTASection />
//       <Footer />
//     </>
//   );
// };

// export default WhatWeOffer;

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTA";

gsap.registerPlugin(ScrollTrigger);

const WhatWeOffer = () => {
  const sectionRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    // Parallax Hero
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

    // Fade-up Animations
    const elements = sectionRef.current?.querySelectorAll(".fade-up") || [];
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });
  }, []);

  return (
    <>
      <Header />

      {/* === HERO SECTION === */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <motion.img
          ref={heroImgRef}
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
          alt="Consulting Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.5] top-[-20px]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-transparent top-0" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            What <span className="text-[#f6df70] italic">We Offer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-200 text-lg md:text-xl mt-5 leading-relaxed"
          >
            Tailored consulting and operational excellence — helping businesses
            build resilience, scale sustainably, and innovate confidently.
          </motion.p>
        </div>
      </section>

      {/* === MAIN CONTENT === */}
      <section
        ref={sectionRef}
        className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto space-y-20">
          {/* INTRODUCTION */}
          <div className="fade-up text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What <span className="text-[#c1272d] italic">ANTX Offers</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              ANTX offers tailored and on-demand consulting services designed to
              help startups and medium-sized businesses — domestic and overseas
              — with leaner or limited India presence achieve competitive edge,
              supply chain resilience, and sustainable growth through integrated
              strategy, diversification, and operational excellence.
            </p>
          </div>

          {/* === STRATEGIC PLANNING === */}
          <div className="grid md:grid-cols-2 gap-12 items-center fade-up">
            <div>
              <h3 className="text-3xl font-semibold text-[#c1272d] mb-4">
                Strategic Planning for Medium-Sized Businesses
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                ANTX assists medium-sized enterprises in mapping a clear
                strategic direction and converting ambitions into achievable
                outcomes.
              </p>
              <ul className="list-disc list-inside space-y-3 text-[1.05rem] text-gray-700">
                <li>
                  Business strategy formulation aligned with market dynamics and
                  company vision.
                </li>
                <li>
                  Long-term goal setting and actionable strategic planning with
                  measurable milestones.
                </li>
                <li>
                  Annual Operating Plans (AOP) and budgets to drive disciplined
                  execution.
                </li>
                <li>
                  Policy deployment and performance management frameworks
                  fostering accountability.
                </li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80"
              alt="Strategic Planning"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* === DIVERSIFICATION === */}
          <div className="grid md:grid-cols-2 gap-12 items-center fade-up">
            <img
              src="https://images.unsplash.com/photo-1573164573938-c9a3a7a1e26f?auto=format&fit=crop&w=1000&q=80"
              alt="Diversification Growth"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700 order-2 md:order-1"
            />
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold text-[#c1272d] mb-4">
                Diversification for Multi-Dimensional Growth
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Recognizing the dynamic business landscape, ANTX partners with
                medium-sized businesses to unlock new growth opportunities
                through diversification and market expansion.
              </p>
              <ul className="list-disc list-inside space-y-3 text-[1.05rem] text-gray-700">
                <li>
                  Develop robust growth and diversification strategies that
                  mitigate risk.
                </li>
                <li>
                  Execute comprehensive business plans for new markets or
                  segments.
                </li>
                <li>
                  Transition products, markets, and technologies to stay
                  competitive.
                </li>
              </ul>
            </div>
          </div>

          {/* === OPERATIONS EXCELLENCE === */}
          <div className="grid md:grid-cols-2 gap-12 items-center fade-up">
            <div>
              <h3 className="text-3xl font-semibold text-[#c1272d] mb-4">
                Operations Excellence for Profitable Growth
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To maximize operational effectiveness, ANTX aligns operations
                with strategic objectives and fosters long-term profitability.
              </p>
              <ul className="list-disc list-inside space-y-3 text-[1.05rem] text-gray-700">
                <li>Design resilient and adaptive operational strategies.</li>
                <li>
                  Re-engineer business processes to enhance efficiency and
                  eliminate bottlenecks.
                </li>
                <li>
                  Implement risk management frameworks to mitigate business
                  threats.
                </li>
                <li>
                  Improve profitability through cost optimization and margin
                  enhancement.
                </li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1581091215367-59ab6b5bb96f?auto=format&fit=crop&w=1000&q=80"
              alt="Operations Excellence"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* === VALUE ADD SECTION === */}
          <div className="fade-up text-center">
            <h3 className="text-4xl font-semibold text-[#c1272d] mb-6">
              How ANTX Adds Value
            </h3>
            <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-lg text-gray-700 text-left">
              <li>
                <strong>Customized Solutions:</strong> Every engagement is
                tailored to the unique needs and context of medium-sized
                businesses, ensuring practical and scalable outcomes.
              </li>
              <li>
                <strong>End-to-End Support:</strong> From vision and strategy
                formulation to execution and performance monitoring, ANTX
                delivers hands-on guidance at every stage.
              </li>
              <li>
                <strong>Sustainable Impact:</strong> With a focus on measurable
                results and long-term transformation, ANTX empowers businesses
                to thrive even in challenging environments.
              </li>
            </ul>
          </div>

          {/* === THREE VERTICALS === */}
          <div className="fade-up mt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Our <span className="text-[#c1272d] italic">Core Verticals</span>
            </h2>

            <div className="space-y-20">
              {/* Sourcing & SCM */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-3xl font-semibold text-[#c1272d] mb-4">
                    Sourcing, SCM & Program Management
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-[1.05rem]">
                    We help clients gain a competitive edge through strategic
                    sourcing of automotive and non-automotive components,
                    providing value from RFQ to program delivery and SCM
                    support. Our strong team manages sourcing for components,
                    tooling, prototypes, and capital equipment.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1581091870634-73c99f3ba1d2?auto=format&fit=crop&w=1000&q=80"
                  alt="SCM Management"
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Change & Growth */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80"
                  alt="Change Management"
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700 order-2 md:order-1"
                />
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-semibold text-[#c1272d] mb-4">
                    Managing Change & Managing Growth
                  </h3>
                  <p className="text-gray-700 text-[1.05rem] leading-relaxed mb-4">
                    Strategic change management ensures organizational success
                    in dynamic markets. Growth management aligns expansion with
                    strategic goals for sustainable success.
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 text-[1.05rem]">
                    <li>
                      <strong>Strategic Alignment:</strong> Growth initiatives
                      that support company mission and vision.
                    </li>
                    <li>
                      <strong>Risk Mitigation:</strong> Proactive risk
                      management for stable expansion.
                    </li>
                    <li>
                      <strong>Resource Optimization:</strong> Efficient use of
                      financial and human resources.
                    </li>
                    <li>
                      <strong>Informed Decision-Making:</strong> Data-driven
                      insights guiding scalable growth.
                    </li>
                  </ul>
                </div>
              </div>

              {/* M&A */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-3xl font-semibold text-[#c1272d] mb-4">
                    Merger & Acquisition
                  </h3>
                  <p className="text-gray-700 text-[1.05rem] leading-relaxed">
                    Mergers and acquisitions (M&A) are strategic tools for
                    companies to accelerate growth, gain market share, and
                    enhance value. ANTX supports clients in streamlining due
                    diligence, identifying synergies, and ensuring successful
                    integration for long-term success.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3b?auto=format&fit=crop&w=1000&q=80"
                  alt="M&A Consulting"
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default WhatWeOffer;
