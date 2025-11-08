// import Home from "./pages/Home";

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import WhatWeOffer from "./pages/WhatWeOffer";
import OurProjects from "./pages/Projects";
import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import Services from "./pages/Services";
// import NotFound from "./pages/NotFound"; // optional 404 page

// // Import your layout components
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import CTASection from "./components/CTASection";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Common Header */}
      {/* <Header /> */}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/we-offer" element={<WhatWeOffer />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* CTA Section (shows on all pages except 404) */}
      {/* <CTASection /> */}

      {/* Common Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
