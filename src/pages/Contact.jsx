import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Let's connect! Feel free to reach out.
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abhisheksharmaword@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-red-500 text-3xl transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-sharma-248390309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 text-3xl transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Abhishek-sharma-project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black text-3xl transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
