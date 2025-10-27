import React from "react";

function Devicist() {
  return (
    <div className="text-left max-w-2xl pb-[120px] pt-[120px]">
      <p className="text-lg mb-8 text-gray-300">
        My commercial work is posted at:
        <div className="link-container">
          <a
            href="https://www.devicist.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-blue no-underline transition-colors duration-300 hover:text-portfolio-blue-light"
          >
            <h1 className="text-3xl font-light mb-4 tracking-tight">
              Devicist
            </h1>
          </a>{" "}
          (pronounced "device-ist").
        </div>
      </p>

      <p className="text-lg mb-8 text-gray-300">
        I specialize in rapid development of prototypes, activations, and
        experiences that bridge digital and physical spaces. Some of these are
        permanently installed in corporate offices, but most go on display at
        trade shows and other live events. I've worked with a variety of
        clients, including Shopify, VW, Intel, and more.
      </p>
    </div>
  );
}

export default Devicist;
