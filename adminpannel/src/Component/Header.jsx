import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white shadow-md fixed top-0 w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <div className="text-2xl font-bold">Admin Panel</div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          ☰
        </button>
        <nav
          className={`w-full md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a href="#dashboard" className="hover:text-gray-400">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#users" className="hover:text-gray-400">
                Users
              </a>
            </li>
            <li>
              <a href="#settings" className="hover:text-gray-400">
                Settings
              </a>
            </li>
            <li>
              <a href="#profile" className="hover:text-gray-400">
                Profile
              </a>
            </li>
            <li>
              <a href="#logout" className="hover:text-gray-400">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
