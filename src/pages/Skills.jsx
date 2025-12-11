import { useState } from "react";
import { motion } from "framer-motion";

import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";

import {
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiRedux,
  SiMongodb,
  SiNodedotjs,
  SiJsonwebtokens,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

import { VscJson } from "react-icons/vsc"; // REST API Icon

// ================= SKILL CATEGORIES =================
const skillCategories = {
  Frontend: [
    { name: "HTML", icon: IoLogoHtml5, color: "#E34F26" },
    { name: "CSS", icon: IoLogoCss3, color: "#1572B6" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: IoLogoReact, color: "#61DAFB" },
    { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  ],

  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
    { name: "Express.js", icon: SiExpress, color: "#303030" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#D63AFF" },
    { name: "REST APIs", icon: VscJson, color: "#0EA5E9" },
  ],

  Tools: [
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Git & GitHub", icon: SiGithub, color: "#181717" },
  ],
};

// ================= SKILL CARD =================
const SkillCard = ({ name, icon: Icon, color }) => (
  <div
    className="p-6 bg-white dark:bg-gray-800 shadow-xl rounded-xl flex flex-col items-center
    transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
  >
    {Icon ? (
      <Icon
        className="text-5xl mb-2 transition-all duration-300 ease-in-out"
        style={{
          color,
          textShadow: `0px 0px 10px ${color}55`,
        }}
      />
    ) : (
      <div
        className="text-4xl font-bold mb-2 transition-all duration-300 ease-in-out"
        style={{ color }}
      >
        {name[0]}
      </div>
    )}

    <p className="text-lg font-semibold text-gray-800 dark:text-white transition-all duration-300">
      {name}
    </p>
  </div>
);

// ================= SKILLS COMPONENT =================
const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
          Skills
        </h2>

        {/* ---------- Tabs ---------- */}
        <div className="flex justify-center gap-6 mb-10">
          {Object.keys(skillCategories).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full cursor-pointer font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ---------- Skills Grid ---------- */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
        >
          {skillCategories[activeTab].map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
