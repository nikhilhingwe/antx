import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import homeHero from "../assets/hero.png";

export default function HomeHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP background fade-in
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.8, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[85vh] bg-cover bg-center flex items-end" // 👈 changed from items-center to items-end
      style={{
        backgroundImage: `url(${homeHero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-16 text-white z-10 pb-16 md:pb-24">
        {/* 👆 added bottom padding so text isn't stuck to edge */}
        <motion.div
          className="max-w-xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            Turning <span className="font-semibold">Vision</span> into
            <br />
            <span className="italic font-semibold">Action.</span>
          </h1>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f23838] to-[#f6c65b] text-white font-medium px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md"
            >
              Explore Services
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
