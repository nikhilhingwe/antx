import React from "react";
import { motion } from "framer-motion";

export default function StatsHome() {
  const stats = [
    {
      value: "50",
      suffix: "Cr+",
      title: "Component Sourcing",
      desc: "Powertrain, LV & HV Harness, HPDC, GDC, VCU, BCM & BDU",
    },
    {
      value: "10",
      suffix: "Cr+",
      title: "Prototyping & Fixtures",
      desc: "Lighting & Interior trims, BIW, Aluminium parts",
    },
    {
      value: "7.5",
      suffix: "Cr+",
      title: "Software & Telematics",
      desc: "Telematics, Data Engg & ADAS",
    },
  ];

  return (
    <section className="bg-[#f6df70] py-5 md:py-3 w-full">
      {/* Increased width from max-w-6xl → max-w-7xl */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/20">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start justify-center px-4 py-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-start gap-1">
              <h2 className="text-5xl md:text-6xl font-bold text-black leading-none">
                {item.value}
              </h2>
              <span className="text-sm md:text-base font-semibold text-black">
                {item.suffix}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-black mt-2">
              {item.title}
            </h3>
            {/* 👇 Aligned left instead of center */}
            <p className="text-sm md:text-base text-black/80 mt-1 leading-snug text-left max-w-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
