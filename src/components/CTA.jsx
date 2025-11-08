import React from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/cta.png"; // replace with your background image

export default function CTASection() {
  return (
    <section
      className="relative w-full bg-cover bg-center text-white py-10 md:py-14"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-6 md:gap-10">
        {/* Text */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-xl md:text-2xl font-medium leading-relaxed">
            <span className="font-bold">Let’s discuss</span> how ANTX can help
            you
            <br className="hidden md:block" /> scale with strategy, execution,
            and purpose.
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm md:text-base font-medium bg-gradient-to-r from-[#f23838] to-[#f6c65b] shadow-lg whitespace-nowrap"
          >
            Book a Consultation →
          </motion.a>

          <span className="text-white/90 text-sm md:text-base">
            <span className="font-semibold text-white mx-1">Or</span> Call Us
            Today!
          </span>
        </div>
      </div>
    </section>
  );
}
