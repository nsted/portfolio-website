import React, { useState } from "react";
import Landing from "./components/Landing";
import Robots from "./components/Robots";
import Devicist from "./components/Commercial";
import Prototypes from "./components/Prototypes";
import Footer from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState("landing");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setCurrentSection(section);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderContent = () => {
    switch (currentSection) {
      case "landing":
        return <Landing />;
      case "robots":
        return <Robots />;
      case "devicist":
        return <Devicist />;
      case "prototypes":
        return <Prototypes />;
      default:
        return <Landing />;
    }
  };

  return (
    <div className="min-h-screen flex justify-center p-5 box-border font-helvetica bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-[1000] text-left flex items-center justify-between px-5 py-5 bg-black/80 backdrop-blur-sm md:top-5 md:left-5 md:right-auto md:px-0 md:py-0 md:bg-transparent md:backdrop-blur-none md:justify-start">
        <h1 className="text-2xl font-light text-white m-0 tracking-tight">
          <a
            href="#landing"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("landing");
            }}
            className="text-white no-underline transition-colors duration-300 hover:text-portfolio-blue"
          >
            Nick Stedman
          </a>
        </h1>
      </header>
      <nav className="fixed top-[90px] left-5 z-[1000] hidden md:block">
        <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
          <li className="m-0">
            <a
              href="#robots"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("robots");
              }}
              className={`text-gray-300 no-underline text-base font-light px-3 py-2 border border-white/10 rounded bg-black/30 backdrop-blur-sm transition-all duration-300 block hover:text-white hover:border-white/30 hover:bg-black/50 ${
                currentSection === "robots"
                  ? "text-white border-white/50 bg-black/60"
                  : ""
              }`}
            >
              Robots
            </a>
          </li>
          <li className="m-0">
            <a
              href="#devicist"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("devicist");
              }}
              className={`text-gray-300 no-underline text-base font-light px-3 py-2 border border-white/10 rounded bg-black/30 backdrop-blur-sm transition-all duration-300 block hover:text-white hover:border-white/30 hover:bg-black/50 ${
                currentSection === "devicist"
                  ? "text-white border-white/50 bg-black/60"
                  : ""
              }`}
            >
              Commercial
            </a>
          </li>
          <li className="m-0">
            <a
              href="#prototypes"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("prototypes");
              }}
              className={`text-gray-300 no-underline text-base font-light px-3 py-2 border border-white/10 rounded bg-black/30 backdrop-blur-sm transition-all duration-300 block hover:text-white hover:border-white/30 hover:bg-black/50 ${
                currentSection === "prototypes"
                  ? "text-white border-white/50 bg-black/60"
                  : ""
              }`}
            >
              Prototypes
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="fixed top-5 right-5 z-[1001] md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/50 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-12 right-0 bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="list-none m-0 p-2 min-w-[150px]">
            <li className="m-0">
              <a
                href="#robots"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("robots");
                }}
                className={`text-gray-300 no-underline text-sm font-light px-3 py-2 rounded block hover:text-white hover:bg-white/10 transition-all duration-300 ${
                  currentSection === "robots" ? "text-white bg-white/10" : ""
                }`}
              >
                Robots
              </a>
            </li>
            <li className="m-0">
              <a
                href="#devicist"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("devicist");
                }}
                className={`text-gray-300 no-underline text-sm font-light px-3 py-2 rounded block hover:text-white hover:bg-white/10 transition-all duration-300 ${
                  currentSection === "devicist" ? "text-white bg-white/10" : ""
                }`}
              >
                Commercial
              </a>
            </li>
            <li className="m-0">
              <a
                href="#prototypes"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("prototypes");
                }}
                className={`text-gray-300 no-underline text-sm font-light px-3 py-2 rounded block hover:text-white hover:bg-white/10 transition-all duration-300 ${
                  currentSection === "prototypes"
                    ? "text-white bg-white/10"
                    : ""
                }`}
              >
                Prototypes
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left max-w-2xl">{renderContent()}</div>

      <Footer />
    </div>
  );
}

export default App;
