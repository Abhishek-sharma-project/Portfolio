import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import {
  SiTailwindcss,
  SiFirebase,
  SiBootstrap,
  SiGithub,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: IoLogoHtml5, color: "#E34F26" },
  { name: "CSS", icon: IoLogoCss3, color: "#1572B6" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
  { name: "React.js", icon: IoLogoReact, color: "#61DAFB" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git & GitHub", icon: SiGithub, color: "#181717" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {skills.map(({ name, icon: Icon, color }, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-900 shadow-md rounded-lg flex flex-col items-center transition-transform transform hover:scale-110"
            >
              <Icon className="text-5xl" style={{ color }} />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-white">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
