import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Email error:", err);
        setLoading(false);
      });
  };

  return (
    <section className="pt-20 pb-24 px-6 md:px-20 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-10 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto mb-12 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md space-y-6 transition-colors duration-300"
      >
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 text-center">
          Get in Touch
        </h3>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-3">
            <FaPhone className="text-blue-500 mt-1" />
            <div>
              <p className="font-medium">Phone</p>
              <p>+91 8106069744</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-blue-500 mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <p>hanokkala123@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:col-span-2">
            <FaMapMarkerAlt className="text-blue-500 mt-1" />
            <div>
              <p className="font-medium">Location</p>
              <p>H.no:5-5/25/15/10, Balachithari Nagar Colony</p>
              <p>Boduppal, Hyderabad, Telangana - 500092</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md space-y-6 transition-colors duration-300"
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            onChange={handleChange}
            value={form.name}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message..."
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            onChange={handleChange}
            value={form.message}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {sent && (
          <p className="text-green-600 dark:text-green-400 mt-4 text-sm">
            ✅ Message sent successfully!
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
