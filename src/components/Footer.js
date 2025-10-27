import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-8 border-t border-white/10 text-center bg-black/80 backdrop-blur-sm z-[100]">
      <div className="mb-4">
        <a
          href="https://github.com/devicist"
          target="_blank"
          rel="noopener noreferrer"
          className="text-portfolio-blue no-underline mx-4 text-base transition-colors duration-200 hover:text-portfolio-blue-light"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/nickstedman/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-portfolio-blue no-underline mx-4 text-base transition-colors duration-200 hover:text-portfolio-blue-light"
        >
          linkedin
        </a>
        <a
          href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#110;&#105;&#99;&#107;&#115;&#116;&#101;&#100;&#109;&#97;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
          className="text-portfolio-blue no-underline mx-4 text-base transition-colors duration-200 hover:text-portfolio-blue-light"
        >
          email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
