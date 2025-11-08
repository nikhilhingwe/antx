// import React from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Linkedin, MapPin, Mail } from "lucide-react";
// import footerBg from "../assets/homeAboutBG.png"; // faint lotus background
// import logo from "../assets/logo.png"; // your ANTX logo

// export default function Footer() {
//   return (
//     <footer
//       className="relative bg-white text-black pt-10 pb-6 overflow-hidden"
//       style={{
//         backgroundImage: `url(${footerBg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundSize: "contain",
//       }}
//     >
//       {/* Main content */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-12">
//         {/* === Left Logo Section === */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <img src={logo} alt="ANTX Consulting" className="w-36 mb-3" />
//           <p className="text-[#c1272d] font-medium leading-relaxed">
//             Knowledge.
//             <br />
//             Transformation.
//             <br />
//             Prosperity.
//           </p>

//           {/* Social icons */}
//           <div className="flex items-center gap-4 mt-5">
//             <a href="#" className="text-[#c1272d] hover:opacity-80 transition">
//               <Facebook className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-[#c1272d] hover:opacity-80 transition">
//               <Instagram className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-[#c1272d] hover:opacity-80 transition">
//               <Linkedin className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         {/* === Navigation === */}
//         <div className="text-center md:text-left">
//           <h3 className="text-lg font-semibold italic mb-3">Navigation</h3>
//           <ul className="space-y-1 text-black/80 font-medium">
//             <li>
//               <Link to="/" className="hover:text-[#c1272d] transition">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-[#c1272d] transition">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/services" className="hover:text-[#c1272d] transition">
//                 What We Offer
//               </Link>
//             </li>
//             <li>
//               <Link to="/projects" className="hover:text-[#c1272d] transition">
//                 Our Projects
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-[#c1272d] transition">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* === Contact Info === */}
//         <div className="text-center md:text-left">
//           <h3 className="text-lg font-semibold italic mb-3">
//             How to Contact Us
//           </h3>
//           <div className="flex items-start justify-center md:justify-start gap-2 text-black/80 mb-3">
//             <MapPin className="w-5 h-5 text-[#c1272d] flex-shrink-0" />
//             <p className="text-sm leading-snug">
//               410 Sandtown,
//               <br /> California 94001, USA
//             </p>
//           </div>
//           <div className="flex items-center justify-center md:justify-start gap-2 text-black/80">
//             <Mail className="w-5 h-5 text-[#c1272d]" />
//             <p className="text-sm">info@antxconsulting.com</p>
//           </div>
//         </div>

//         {/* === Consultation === */}
//         <div className="text-center md:text-left">
//           <h3 className="text-lg font-semibold italic mb-3">
//             Get Consultation
//           </h3>
//           <p className="text-sm text-black/80 mb-1">Let’s Connect</p>
//           <p className="text-[#c1272d] font-bold text-lg">888-998-2567</p>
//         </div>
//       </div>

//       {/* === Bottom Copyright === */}
//       <div className="mt-10 border-t border-black/10 pt-4 text-center text-sm text-black/70">
//         <p>
//           Copyright 2025. All Rights Reserved.{" "}
//           <Link
//             to="/terms"
//             className="text-[#c1272d] hover:underline transition"
//           >
//             Terms and Conditions
//           </Link>{" "}
//           |{" "}
//           <Link
//             to="/privacy"
//             className="text-[#c1272d] hover:underline transition"
//           >
//             Privacy Policy
//           </Link>
//         </p>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Mail } from "lucide-react";
import footerBg from "../assets/homeAboutBG.png"; // faint lotus background
import logo from "../assets/logo.png"; // your ANTX logo

export default function Footer() {
  return (
    <footer
      className="relative bg-white text-black pt-14 pb-10 overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      {/* === Main content === */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-14">
        {/* === Left Logo Section === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <img src={logo} alt="ANTX Consulting" className="w-40 mb-2" />
          <p className="text-[#c1272d] font-medium leading-relaxed tracking-wide">
            Knowledge.
            <br />
            Transformation.
            <br />
            Prosperity.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5 pt-3">
            <a href="#" className="text-[#c1272d] hover:opacity-80 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#c1272d] hover:opacity-80 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#c1272d] hover:opacity-80 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* === Navigation === */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-lg font-semibold italic mb-4">Navigation</h3>
          <ul className="space-y-2 text-black/80 font-medium">
            <li>
              <Link to="/" className="hover:text-[#c1272d] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#c1272d] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#c1272d] transition">
                What We Offer
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-[#c1272d] transition">
                Our Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#c1272d] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* === Contact Info === */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-lg font-semibold italic mb-4">
            How to Contact Us
          </h3>
          <div className="flex items-start justify-center md:justify-start gap-3 text-black/80">
            <MapPin className="w-5 h-5 text-[#c1272d] flex-shrink-0 mt-[2px]" />
            <p className="text-sm leading-snug">
              410 Sandtown,
              <br /> California 94001, USA
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-black/80">
            <Mail className="w-5 h-5 text-[#c1272d]" />
            <p className="text-sm">info@antxconsulting.com</p>
          </div>
        </div>

        {/* === Consultation === */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-lg font-semibold italic mb-4">
            Get Consultation
          </h3>
          <p className="text-sm text-black/80 mb-1">Let’s Connect</p>
          <p className="text-[#c1272d] font-bold text-xl tracking-wide">
            888-998-2567
          </p>
        </div>
      </div>

      {/* === Bottom Copyright === */}
      <div className="mt-12 border-t border-black/10 pt-5 text-center text-sm text-black/70 tracking-wide px-6">
        <p>
          Copyright © 2025. All Rights Reserved.{" "}
          <Link
            to="/terms"
            className="text-[#c1272d] hover:underline transition"
          >
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link
            to="/privacy"
            className="text-[#c1272d] hover:underline transition"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
