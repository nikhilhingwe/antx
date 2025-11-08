import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ama from "../assets/ama.png";
import har from "../assets/har.png";
import sen from "../assets/sen.png";
import be from "../assets/be.png";
import itl from "../assets/itl.png";

const FeaturedProjectHome = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  const projects = [
    {
      title: "Software",
      desc: [
        "Connectivity solution to the top E-commerce giant",
        "Robotic retrieval system for a Govt Library",
        "Predictive mechanism for Ferry maintenance",
      ],
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      gradient: "from-red-700/70 to-yellow-400/30",
      arrowColor: "group-hover:text-red-600",
    },
    {
      title: "Component Sourcing",
      desc: [
        "Sourcing solutions for automotive electronics",
        "Streamlined vendor collaboration",
        "Optimized cost & quality assurance processes",
      ],
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
      gradient: "from-yellow-600/70 to-orange-400/30",
      arrowColor: "group-hover:text-yellow-700",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white text-center overflow-hidden"
    >
      {/* Header */}
      <div className="fade-up">
        <h4 className="text-[#c1272d] font-semibold text-lg tracking-wide">
          Featured Projects
        </h4>
        <h2 className="text-4xl md:text-5xl font-serif italic font-bold mt-2 text-black">
          Turning Innovation{" "}
          <span className="not-italic font-medium">into Action.</span>
        </h2>
      </div>

      {/* Projects */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative group rounded-2xl overflow-hidden text-left cursor-pointer shadow-md"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.gradient} transition-all duration-500`}
            />

            {/* Title Always Visible */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl md:text-3xl font-semibold">
                {project.title}
              </h3>
            </div>

            {/* Hidden Description on Hover */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-end p-8 pb-16 text-white opacity-0 group-hover:opacity-100 bg-black/30 backdrop-blur-sm"
            >
              <ul className="text-sm md:text-base space-y-1">
                {project.desc.map((line, i) => (
                  <li key={i}>⭐ {line}</li>
                ))}
              </ul>
            </motion.div>

            {/* Arrow */}
            <motion.div
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className={`absolute bottom-6 right-6 text-white text-2xl border-2 border-white rounded-full p-2 transition-all duration-500 ${project.arrowColor}`}
            >
              →
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Partner Logos */}
      <div className="mt-20 fade-up">
        <p className="text-[#c1272d] font-medium tracking-wide text-[30px] mb-10">
          We Have Worked With
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-17 items-center opacity-90">
          <img src={ama} alt="Amazon" className="h-10" />
          <img src={har} alt="Harbinger" className="h-10" />
          <img src={sen} alt="Sensortec" className="h-10" />
          <img src={be} alt="Blue Energy" className="h-10" />
          <img src={itl} alt="ITL" className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectHome;
