const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-3 sm:p-4 transform hover:scale-105 transition duration-300 w-full max-w-sm mx-auto">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-md w-full h-40 object-cover"
      />
      <h3 className="text-lg sm:text-xl font-semibold mt-3 dark:text-white">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 text-xs sm:text-sm px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons for Live Demo & GitHub Code */}
      <div className="mt-3 flex gap-2">
        <a
          // href={project.liveDemo}
          href={
            project.liveDemo.startsWith("http")
              ? project.liveDemo
              : `https://${project.liveDemo}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-semibold hover:bg-blue-700 transition"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-semibold hover:bg-gray-900 transition"
        >
          GitHub Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
