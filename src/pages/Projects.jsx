import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="pt-20 pb-24 px-6 md:px-20 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
