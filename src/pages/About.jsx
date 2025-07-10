import { useRef } from "react";
import { useInView } from "framer-motion";
import SkillBar from "../components/SkillBar";
import AnimatedTimeline from "../components/AnimatedTimeline";
import AboutIntro from "../components/AboutIntro";

const skills = [
  { skill: "Python", percentage: 90 },
  { skill: "C Programming", percentage: 80 },
  { skill: "Java", percentage: 80 },
  { skill: "JavaScript", percentage: 80 },
  { skill: "Web Development", percentage: 85 },
  { skill: "React JS", percentage: 80 },
  { skill: "Git & Github", percentage: 75 },
  { skill: "Machine Learning", percentage: 70 },
  { skill: "Deep Learning", percentage: 60 },
  { skill: "HTML & CSS", percentage: 85 },
  { skill: "MySQL", percentage: 80 },
  { skill: "Django", percentage: 80 },
];

const About = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false });

  return (
    <section
      id="about"
      className="pt-12 pb-16 bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 md:px-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* 🧑‍💻 Bio */}
        <AboutIntro />

        {/* 📊 Skills */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-300">
            Skills & Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {skills.map((item, index) => (
              <SkillBar
                key={index}
                skill={item.skill}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>

        {/* 🎓 Education Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-10 text-blue-600 dark:text-blue-300 text-center">
            Education
          </h3>
          <AnimatedTimeline />
        </div>
      </div>
    </section>
  );
};

export default About;
