import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
  FaBriefcase,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/logo.png"; // Assuming you have a logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const linkClass = (path) =>
    `flex items-center gap-1 transition-colors duration-300 ${
      location.pathname === path
        ? "text-blue-500 dark:text-blue-400"
        : "hover:text-blue-500 dark:hover:text-blue-400"
    }`;

  return (
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-gray-900 dark:text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <img src={logo} alt="Logo" className="w-12 h-12 inline-block mr-2" />
          Hanok
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm items-center">
          <Link to="/" className={linkClass("/")}>
            <FaHome /> Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            <FaUser /> About
          </Link>
          <Link to="/projects" className={linkClass("/projects")}>
            <FaProjectDiagram /> Projects
          </Link>
          <Link to="/experience" className={linkClass("/experience")}>
            <FaBriefcase /> Experience
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            <FaEnvelope /> Contact
          </Link>
          <a href="/KalaHanokResume.pdf" download className={linkClass("/resume")}>
            <FaFileAlt /> Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
            title="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile hamburger icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-4 text-sm text-gray-900 dark:text-white transition-colors duration-300">
          <Link to="/" onClick={() => setIsOpen(false)} className={linkClass("/")}>
            <FaHome /> Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={linkClass("/about")}>
            <FaUser /> About
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className={linkClass("/projects")}>
            <FaProjectDiagram /> Projects
          </Link>
          <Link to="/experience" onClick={() => setIsOpen(false)} className={linkClass("/experience")}>
            <FaBriefcase /> Experience
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={linkClass("/contact")}>
            <FaEnvelope /> Contact
          </Link>
          <a
            href="/KalaHanokResume.pdf"
            download
            onClick={() => setIsOpen(false)}
            className={linkClass("/resume")}
          >
            <FaFileAlt /> Resume
          </a>

          {/* Mobile theme toggle */}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setIsOpen(false);
            }}
            className="flex items-center gap-2 mt-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />} Theme
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
