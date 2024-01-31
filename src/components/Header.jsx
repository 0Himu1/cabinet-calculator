import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ onToggleDarkMode, isDarkMode }) => {
  return (
    <header className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-5 shadow-md">
      <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white no-underline hover:text-blue-600 dark:hover:text-blue-400">
        Cabinet Calculator
      </Link>
      <button
        onClick={onToggleDarkMode}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500"
      >
        {isDarkMode ? (
          <FaSun className="text-xl text-yellow-500" />
        ) : (
          <FaMoon className="text-xl text-blue-600" />
        )}
      </button>
    </header>
  );
};

export default Header;
