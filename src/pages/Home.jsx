import ParticlesComponent from "../components/ParticlesComponent";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* ✅ Background Particles */}
      <ParticlesComponent />

      {/* ✅ Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-20 gap-10">
        {/* 👤 Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="shrink-0"
        >
          <img
            src={profile}
            alt="Hanok"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-xl object-cover hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* 💬 Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Hanok Kala</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
          >
            <Typewriter
              words={[
                "Full-Stack Developer 💻",
                "AI/ML Enthusiast 🤖",
                "Deep Learning 🧠",
                "Web + AI Integration ✨",
                "Passionate About Real-World ML Applications 🌍",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
          >
            🚀 Explore Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;
