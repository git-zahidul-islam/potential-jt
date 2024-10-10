"use client"
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import logo from '../assets/logo.png'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="#nav" className="h-[67px] w-full text-black md:py-16 flex items-center relative">
      <div className="md:w-[80%] w-full mx-auto px-4 md:px-0 lg:px-0">
        <div className="flex items-center justify-between h-[67px]">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold flex gap-3 items-center justify-center">
            <Image src={logo} alt="logo" width={45} height={45}></Image>
            <h1 className="md:text-[45px] text-[35px] md:block hidden"><span className="font-bold text-[#000000f0]">M</span><span className="font-normal text-[#8a8a8a]">umair</span></h1>
            </a>
          </div> 

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-8 items-center">
            <a className="text-xl font-normal" href="#nav">
              Home
            </a>
            <a className="text-xl font-normal" href="#about-me">
              About Me
            </a>
            <a className="text-xl font-normal" href="#service">
              Services
            </a>
            <a className="text-xl font-normal" href="#project">
              Project
            </a>
            <a className="text-xl font-normal" href="#testimonials">
            Testimonials
            </a>
            <a className="text-xl font-normal" href="#contact">
            Contact
            </a>
          </div>

          {/* Right-side buttons */}
          <div className="hidden md:flex space-x-4 items-center">
  <a
    href="/login"
    className="px-4 pb-[6px] bg-[#fd6e00ea] text-white/90 rounded text-xl font-normal transition duration-300 ease-in-out transform hover:bg-[#FD6F00] hover:scale-105"
  >
    Appointment
  </a>
</div>


          {/* Mobile menu button */}
          <div className="flex items-center md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <GiHamburgerMenu className="text-black/90 text-3xl"/>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ff9654] pb-5 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-white/85 text-xl z-20">
          <a
            href="#nav"
            className="block px-4 py-2"
          >
            Home
          </a>
          <a
            href="#about-me"
            className="block px-4 py-2"
          >
            About Me
          </a>
          <a
            href="#service"
            className="block px-4 py-2"
          >
            Services
          </a>
          <a
            href="#project"
            className="block px-4 py-2"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="block px-4 py-2"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block px-4 py-2"
          >
            Contact
          </a>
          <div className="mt-2 px-4">
            <a
              href="/signup"
              className="block w-full mt-2 px-4 py-2 bg-[#FD6F00] text-[#fff] rounded"
            >
              Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




{/* <nav className="bg-[#1B0C4D] h-[80px] w-full">

</nav> */}