import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // 🔹 Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // 🔹 Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // 🔹 Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("success");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1600&q=80"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Get In <span className="text-[#f6df70] italic">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200"
          >
            We’d love to hear from you — let’s build something great together.
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="bg-gradient-to-b from-[#fffaf3] to-white py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* === LEFT: FORM === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you shortly.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#c1272d] focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#c1272d] focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#c1272d] focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#c1272d] focus:outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSending}
                className="w-full bg-[#c1272d] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#a71f24] transition-colors"
              >
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "success" && (
                <p className="text-green-600 text-center mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center mt-2">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* === RIGHT: CONTACT INFO + MAP === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Office
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Address:</strong> 123 Business Park, Pune, India
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@antxconsulting.com
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                title="ANTX Consulting Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609961574!2d73.71911905889677!3d18.524890423254894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c09cc3e3f8b9%3A0x9b0c8f7e867fa0b1!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707900119864!5m2!1sen!2sin"
                width="100%"
                height="563"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
