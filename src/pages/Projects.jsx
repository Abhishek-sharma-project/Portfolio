// import ProjectCard from "../components/ProjectCard";

// const projects = [
//   {
//     title: "E-Commerce Web App",
//     description:
//       "A fully functional e-commerce platform with cart & payment integration.",
//     techStack: ["React", "Redux", "Tailwind CSS"],
//     image: "https://via.placeholder.com/300",
//     liveDemo: "https://your-ecommerce-live-demo.com",
//     github: "https://github.com/your-ecommerce-repo",
//   },
//   {
//     title: "Job Portal",
//     description: "A job searching platform with AI-powered resume builder.",
//     techStack: ["React", "Node.js", "Tailwind CSS"],
//     image: "https://via.placeholder.com/300",
//     liveDemo: "https://your-jobportal-live-demo.com",
//     github: "https://github.com/your-jobportal-repo",
//   },
//   {
//     title: "Connect",
//     description: "A social platform for developers to share and collaborate.",
//     techStack: ["React", "Node.js", "Tailwind CSS"],
//     image: "https://via.placeholder.com/300",
//     liveDemo: "https://your-connect-live-demo.com",
//     github: "https://github.com/your-connect-repo",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-12 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
//           Projects
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import ProjectCard from "../components/ProjectCard";

const projects = [
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
    title: "Job Portal",
    description:
      "A job searching platform that helps users find and apply for jobs easily.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    image: "JobConnect.jpg",
    liveDemo: "job-connect-eight.vercel.app",
    github: "https://github.com/Abhishek-sharma-project/JobConnect",
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
