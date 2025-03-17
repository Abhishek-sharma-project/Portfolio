import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Abhishek Sharma
        </h1>
        <ul className="hidden md:flex space-x-8">
          {["home", "projects", "skills", "about", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 dark:text-white text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col items-center space-y-5 py-6">
            {["home", "projects", "skills", "about", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
