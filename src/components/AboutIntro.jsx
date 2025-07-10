import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const AboutIntro = () => {
  return (
    <div className="mt-8 max-w-5xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-8 text-center"
      >
        About Me
      </motion.h2>

      {/* 🔵 Styled card container with theme support */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md text-center transition-colors duration-500"
      >
        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-4 text-justify">
          I'm <span className="text-blue-600 dark:text-blue-400 font-semibold">Hanok Kala</span>, a passionate full-stack developer and machine learning enthusiast. I love building clean, user-friendly UIs and solving real-world problems using <span className="text-green-600 dark:text-green-400 font-semibold">AI</span>. I strive to deliver smart solutions through elegant code and thoughtful design.
        </p>

        {/* 📝 Animated one-liner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xl text-blue-700 dark:text-blue-300 font-mono mt-2"
        >
          <Typewriter
            words={[
                "Full-Stack Developer 💻",
                "AI/ML Enthusiast 🤖",
                "Deep Learning 🧠",
                "Web + AI Integration ✨",
                "Passionate About Real-World ML Applications 🌍",
              ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutIntro;
