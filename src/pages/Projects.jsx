import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Learning Management System (LMS)",
    description:
      "A full stack LMS with authentication, roles, course creation, payments, lessons, and course progress.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    image: "projectimage.png",
    liveDemo: "https://lms-app-frontend-beta.vercel.app/",
    github: "https://github.com/Abhishek-sharma-project/lms-app-frontend",
  },
  {
    title: "E-Commerce Web App",
    description:
      "A fully functional e-commerce platform with cart management and a seamless user experience.",
    techStack: ["React", "Redux", "CSS", "Bootstrap"],
    image: "E Commerce.jpg",
    liveDemo: "e-commerce-frontend-kq9n.vercel.app",
    github: "https://github.com/Abhishek-sharma-project/E-Commerce-frontend",
  },
  {
    title: "Connect",
    description:
      "A dynamic social platform where developers can connect, share ideas, and collaborate on projects.",
    techStack: ["React", "Tailwind CSS"],
    image: "connectjpg.jpg",
    liveDemo: "connect-murex.vercel.app",
    github: "https://github.com/Abhishek-sharma-project/Connect",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
