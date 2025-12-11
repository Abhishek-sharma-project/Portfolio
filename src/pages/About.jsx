const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          {/* INTRODUCTION */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Full Stack Developer
            </span>{" "}
            who enjoys turning ideas into clean, scalable and production-ready
            web applications.
          </p>

          {/* PROJECT EXPERIENCE */}
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            I've built multiple real-world projects, including a complete{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              Learning Management System (LMS)
            </span>{" "}
            featuring authentication, roles, payments, lessons and course
            progress tracking. I focus on smooth user experience and efficient
            backend architecture.
          </p>

          {/* TECH SUMMARY */}
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            My core stack includes{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              React, Node.js, Express, MongoDB, JWT Authentication, and REST
              APIs
            </span>
            , along with modern tools like Tailwind CSS, Redux Toolkit,
            Firebase, and Git & GitHub.
          </p>

          {/* EDUCATION */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              🎓 Education
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              B.Tech in{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                Computer Science & Engineering (CSE)
              </span>
            </p>
          </div>

          {/* FULL STACK INTERNSHIP */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              💼 Full Stack Development Internship
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Completed at{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                Learn and Build
              </span>
              , where I worked on both frontend and backend features across the
              MERN stack.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Built reusable UI components, REST APIs, authentication flows, and
              integrated databases for production-ready modules.
            </p>
          </div>

          {/* CLOSING */}
          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            I enjoy learning new technologies, improving my craft, and building
            applications that solve real problems. My goal is to grow as a full
            stack engineer and contribute to impactful products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
