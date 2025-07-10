import { motion } from "framer-motion";

const experiences = [
  {
    title: "Product Intern",
    company: "Will2Care",
    duration: "Aug 2024 – Sep 2024",
    responsibilities: [
      "Implemented multilingual localization for web pages using Google Translate API and associative arrays.",
      "Worked on static and dynamic page translation for Indian languages.",
      "Collaborated with product team to enhance language accessibility.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="pt-20 pb-24 px-6 md:px-20 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center">
        Experience
      </h2>

      {/* 🔹 Work Experience */}
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-blue-500 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
            <p className="text-sm text-blue-600 dark:text-blue-300">{exp.company}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{exp.duration}</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800 dark:text-gray-300">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-16"
      >
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-green-500 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">Certifications</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300 text-sm">
            <li>Essentials in C</li>
            <li>CCNA - Introduction to Networks</li>
            <li>Google Cloud Computing Fundamentals</li>
          </ul>
        </div>
      </motion.div>

      {/* 🔹 Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-12"
      >
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-yellow-500 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4">Achievements</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300 text-sm">
            <li>🎓 9.11 CGPA in B.Tech (AI & ML)</li>
          </ul>
        </div>
      </motion.div>

      {/* 🔹 Clubs & Leadership */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-12"
      >
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-purple-500 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
            Community & Leadership
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300 text-sm">
            <li>🎓 ML Tech Lead – GDSC GRIET: Led 100+ learners with ML/Python training sessions</li>
            <li>💻 Web Dev Lead – xKernel Club: Conducted campus-wide coding contests (150+ participants)</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
