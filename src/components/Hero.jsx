import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Abhishek Sharma.pdf";
    link.download = "Abhishek Sharma Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 px-4"
    >
      <motion.img
        src="image.jpg"
        alt="Profile"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-xl mb-6 border-4 border-gray-300 dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg"
      >
        Hi, I'm a Web Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl"
      >
        Building modern, responsive, and user-friendly web applications.
      </motion.p>

      <div className="flex gap-6 mt-6">
        <motion.button
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.9 }}
          onClick={handleResumeDownload}
          className="bg-gray-900 text-white px-5 sm:px-7 py-2 sm:py-2.5 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:bg-black transition"
        >
          Download Resume
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowLinks(!showLinks)}
          className="bg-blue-600 text-white px-5 sm:px-7 py-2 sm:py-2.5 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </motion.button>
      </div>

      {showLinks && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-6 sm:gap-8 mt-6"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abhisheksharmaword@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-4xl sm:text-5xl text-gray-900 dark:text-white hover:text-red-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-sharma-248390309"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl sm:text-5xl text-gray-900 dark:text-white hover:text-blue-400 transition" />
          </a>
          <a
            href="https://github.com/Abhishek-sharma-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-4xl sm:text-5xl text-gray-900 dark:text-white hover:text-black transition" />
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
