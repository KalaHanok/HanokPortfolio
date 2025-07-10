import { motion } from "framer-motion";

const SkillBar = ({ skill, percentage }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">
          {skill}
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden transition-colors duration-300">
        <motion.div
          className="bg-blue-500 h-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
