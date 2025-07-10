import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const SocialStickyFooter = () => {
  return (
    <div className="fixed bottom-6 left-6 md:flex-col flex gap-4 md:gap-3 text-blue-500 dark:text-blue-400 z-40">
      <a
        href="https://github.com/KalaHanok"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black dark:hover:text-white transition-colors duration-300"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/hanok-kala-0bb145227/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black dark:hover:text-white transition-colors duration-300"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href="https://leetcode.com/u/Kala_Hanok/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black dark:hover:text-white transition-colors duration-300"
      >
        <FaCode size={22} />
      </a>
    </div>
  );
};

export default SocialStickyFooter;
