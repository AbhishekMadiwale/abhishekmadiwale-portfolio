import { useEffect } from "react";
import leetcode from "../assets/leetcode.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/resume.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Abhishek <span className="text-blue-500">Madiwale</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="md:flex items-center space-x-8">
            <div className="w-10 flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#f59e0b] rounded-2xl">
              <a
                href="https://leetcode.com/u/Abhishek_Madiwale/"
                target="_blank"
              >
                <img
                  src={leetcode}
                  alt="leetcode logo"
                  className="rounded-lg "
                />
              </a>
            </div>

            <div className="w-10 flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#f59e0b] rounded-lg ">
              <a
                href="https://www.linkedin.com/in/abhishek-madiwale-4ab70190/"
                target="_blank"
              >
                <img src={linkedin} className="rounded-lg" />
              </a>
            </div>

            <div className="w-10 flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#f59e0b] rounded-lg ">
              <a href="https://github.com/AbhishekMadiwale" target="_blank">
                <img src={github} className="rounded-lg" />
              </a>
            </div>

            <div className="w-10 flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#f59e0b] rounded-lg ">
              <a
                href="https://drive.google.com/file/d/1o9MYnb0HXZgFqBM5cuMLBAPKbZ1LxSyF/view"
                target="_blank"
              >
                <img src={resume} alt="resume logo" className="rounded-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
