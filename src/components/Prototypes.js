import React, { useState } from "react";
import DimmingCarousel from "./DimmingCarousel";
import ProjectNav from "./ProjectNav";

function Prototypes() {
  const [currentGlowIndex, setCurrentGlowIndex] = useState(0);

  const glowItems = [
    {
      type: "image",
      src: require("../assets/images/glow/clockj.jpg"),
      alt: "Glow Clock exterior view",
    },
    {
      type: "image",
      src: require("../assets/images/glow/breath.jpg"),
      alt: "Glow Clock breath effect",
    },
    {
      type: "video",
      src: "https://pub-6b46f37f10d24658bfcac8fcf10c1b00.r2.dev/breath720.mp4",
      alt: "Glow Clock breath demonstration",
    },
    {
      type: "video",
      src: "https://pub-6b46f37f10d24658bfcac8fcf10c1b00.r2.dev/fire720.mp4",
      alt: "Glow Clock fire demonstration",
    },
  ];

  const nextGlow = () => {
    setCurrentGlowIndex((prevIndex) =>
      prevIndex === glowItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevGlow = () => {
    setCurrentGlowIndex((prevIndex) =>
      prevIndex === 0 ? glowItems.length - 1 : prevIndex - 1
    );
  };

  const goToGlow = (index) => {
    setCurrentGlowIndex(index);
  };

  const projects = [
    { id: "glow-clock", name: "Glow Clock" },
    { id: "moti", name: "Moti" },
    { id: "smart-servo", name: "S.S.A.O.B." },
  ];

  return (
    <div className="text-left max-w-2xl pb-[120px] pt-[120px]">
      <ProjectNav projects={projects} />

      <div id="glow-clock">
        <h1 className="text-3xl font-light mb-4 tracking-tight">Glow Clock</h1>
        <p className="text-lg mb-8 text-gray-300">
          Glow Clock uses dynamic color change to indicate the time. The clock
          is composed of RGB LEDs wrapped around both the exterior and interior
          of series of recessed faces. The LEDs cast a glow within the clock
          face and on the surrounding wall. The indirect lighting creates a
          soft, luminous effect. I've experimented with a variety of patterns,
          some minimal, and some highly dynamic.
        </p>

        <DimmingCarousel className="carousel-container">
          <div className="carousel">
            <button className="carousel-btn prev" onClick={prevGlow}>
              ‹
            </button>
            <div className="carousel-media-container">
              {glowItems[currentGlowIndex].type === "image" ? (
                <img
                  src={glowItems[currentGlowIndex].src}
                  alt={glowItems[currentGlowIndex].alt}
                  className="carousel-image"
                />
              ) : (
                <video
                  src={glowItems[currentGlowIndex].src}
                  alt={glowItems[currentGlowIndex].alt}
                  className="carousel-video"
                  controls
                  muted
                  autoPlay
                  loop
                />
              )}
            </div>
            <button className="carousel-btn next" onClick={nextGlow}>
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {glowItems.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentGlowIndex ? "active" : ""}`}
                onClick={() => goToGlow(index)}
              />
            ))}
          </div>
        </DimmingCarousel>
      </div>

      <hr className="section-divider" />

      <div id="moti">
        <h1 className="text-3xl font-light mb-4 tracking-tight">Moti</h1>
        <p className="text-lg mb-8 text-gray-300">
          Moti is a smart servo motor. It streamlines the development of robotic
          projects in a variety of ways. First, because the embedded electronics
          and networking are integrated into the motor, it is easy to use
          without additional components. Second, I built a graphics based app
          for controlling the motors without any coding. Third, because the
          servo is open source, users can easily modify the firmware to fit
          their needs.
        </p>

        <DimmingCarousel className="adb-video-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/6a5q43W-QWE"
              title="Moti Smart Servo Motor Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </DimmingCarousel>
      </div>

      <hr className="section-divider" />

      <div id="smart-servo">
        <h1 className="text-3xl font-light mb-4 tracking-tight">
          Smart Servo Add-On Board
        </h1>
        <p className="text-lg mb-8 text-gray-300">
          Derived from Moti and my robot projects, I built a standalone product
          called the "Smart Servo Add-On Board". It allows users to interface
          with existing smart servo motors such as the Dynamixels. The
          distinguishing feature of the board is that it allows for the motors
          to be controlled wirelessly over web sockets, or other protocols. This
          allows for the motors and thus the robots to be controlled from a
          distance. Learn more about it at:
          <div className="link-container">
            <a
              href="https://www.robotstack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-blue no-underline transition-colors duration-300 hover:text-portfolio-blue-light"
            >
              <h1 className="text-3xl font-light mb-4 tracking-tight">
                robotstack
              </h1>
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Prototypes;
