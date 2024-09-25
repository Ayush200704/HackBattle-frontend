import React from "react";

const Nav = () => {
  return (
    <div className="h-screen w-[80px] bg-white fixed top-0 left-0 shadow-lg z-10">
      <div className="flex flex-col items-center mt-8 space-y-32">
        <div className="logo mb-8 text-2xl font-semibold rotate-90">LOGO</div>
        <nav className="flex flex-col space-y-[100px]">
          <a href="#home" className="title text-lg hover:text-gray-500 rotate-90">
            Home
          </a>
          <a href="#about" className="title text-lg hover:text-gray-500 rotate-90">
            About
          </a>
          <a href="#contact" className="title text-lg hover:text-gray-500 rotate-90">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
