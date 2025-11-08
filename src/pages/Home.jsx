import React from "react";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import StatsHome from "../components/StatsHome";
import AboutHome from "../components/AboutHome";
import ExecutionHome from "../components/ExecutionHome";
import FeaturedProjectHome from "../components/FeaturedProjectHome";
import CTASection from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <StatsHome />
      <AboutHome />
      <ExecutionHome />
      <FeaturedProjectHome />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
