import leetcode from "../assets/leetcode.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/resume.png";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${
                          menuOpen
                            ? "h-screen opacity-100 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                        }
                        `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
      >
        &times;
      </button>

      <a
        href="#home"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                  ${
                    menuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }
                `}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>

      <a
        href="#about"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                  ${
                    menuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }
                `}
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>

      <a
        href="#projects"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                  ${
                    menuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }
                `}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>

      <a
        href="#contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                  ${
                    menuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }
                `}
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>

      <div className="flex gap-4">
        <a href="https://leetcode.com/u/Abhishek_Madiwale/" target="_blank">
          <img
            src={leetcode}
            alt="leetcode logo"
            className="w-10 flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#f59e0b] rounded-lg"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/abhishek-madiwale-4ab70190/"
          target="_blank"
        >
          <img
            src={linkedin}
            className="w-10 flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#f59e0b] rounded-lg"
          />
        </a>

        <a href="https://github.com/AbhishekMadiwale" target="_blank">
          <img
            src={github}
            className="w-10 flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#f59e0b] rounded-lg"
          />
        </a>

        <a
          href="https://drive.google.com/file/d/1o9MYnb0HXZgFqBM5cuMLBAPKbZ1LxSyF/view"
          target="_blank"
        >
          <img
            src={resume}
            alt="resume logo"
            className="w-10 flex transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#f59e0b] rounded-lg"
          />
        </a>
      </div>
    </div>
  );
};
