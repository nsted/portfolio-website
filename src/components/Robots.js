import React, { useState } from "react";
import DimmingCarousel from "./DimmingCarousel";
import ProjectNav from "./ProjectNav";

function Robots() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const images = [
    {
      src: require("../assets/images/pet/body/grapple_side.jpg"),
      alt: "PET robot body view 2",
    },
    {
      src: require("../assets/images/pet/body/grapple_curled.jpg"),
      alt: "PET robot body view 1",
    },
    {
      src: require("../assets/images/pet/body/grapple_upright.jpg"),
      alt: "PET robot body view 3",
    },
  ];

  const mediaItems = [
    {
      type: "image",
      src: require("../assets/images/pet/build/electronics-small.jpg"),
      alt: "PET robot portrait view",
    },
    {
      type: "video",
      src: "https://pub-6b46f37f10d24658bfcac8fcf10c1b00.r2.dev/motion-study.mp4",
      alt: "PET robot demonstration video",
    },
    {
      type: "video",
      src: "https://pub-6b46f37f10d24658bfcac8fcf10c1b00.r2.dev/patterns.mp4",
      alt: "PET robot patterns demonstration video",
    },
    // {
    //   type: "video",
    //   src: require("../assets/images/pet/build/exploded_prism.mp4"),
    //   alt: "PET robot exploded prism demonstration video",
    // },
  ];

  const adbItems = [
    {
      type: "video",
      src: "https://pub-6b46f37f10d24658bfcac8fcf10c1b00.r2.dev/adb.mp4",
      alt: "ADB robot demonstration video",
    },
  ];

  const blanketItems = [
    {
      type: "video",
      src: "https://pub-6b46f37f10d24658bfcac8fcf10c1b00.r2.dev/blanket.mp4",
      alt: "The Blanket Project demonstration video",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const goToMedia = (index) => {
    setCurrentMediaIndex(index);
  };

  const projects = [
    { id: "pet", name: "PET" },
    { id: "blanket", name: "Blanket Project" },
  ];

  return (
    <div className="text-left max-w-2xl pb-[120px] pt-[120px]">
      <ProjectNav projects={projects} />

      <div id="pet">
        <h1 className="text-3xl font-light mb-4 tracking-tight">PET</h1>
        <p className="text-lg mb-8 text-gray-300">
          PET is a tactile robotic companion currently in development. It
          explores how a robot can induce and interpret affect through its
          physical interactions with the user. Freed from anthropomorphic
          imitation, PET has a sleek, modular form derived from its function.
        </p>

        <DimmingCarousel className="carousel-container">
          <div className="carousel">
            <button className="carousel-btn prev" onClick={prevImage}>
              ‹
            </button>
            <div className="carousel-image-container">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="carousel-image"
              />
            </div>
            <button className="carousel-btn next" onClick={nextImage}>
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </DimmingCarousel>

        <p className="text-lg mb-8 text-gray-300">
          The body is 3D printed. The gold plates are touch sensors. Inside each
          prism is a smart servo motor, slip ring, and custom embedded
          electronics that streams data to a computer running an AI model to
          interpret the touch data and generate a mechanical response. The motor
          is torque controlled, so it can apply varying forces to the user.
        </p>

        <DimmingCarousel className="carousel-container">
          <div className="carousel">
            <button className="carousel-btn prev" onClick={prevMedia}>
              ‹
            </button>
            <div className="carousel-media-container">
              {mediaItems[currentMediaIndex].type === "image" ? (
                <img
                  src={mediaItems[currentMediaIndex].src}
                  alt={mediaItems[currentMediaIndex].alt}
                  className="carousel-image portrait-image"
                />
              ) : (
                <video
                  src={mediaItems[currentMediaIndex].src}
                  alt={mediaItems[currentMediaIndex].alt}
                  className="carousel-video portrait-video"
                  controls
                  muted
                  autoPlay
                  loop
                  preload="metadata"
                />
              )}
            </div>
            <button className="carousel-btn next" onClick={nextMedia}>
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentMediaIndex ? "active" : ""}`}
                onClick={() => goToMedia(index)}
              />
            ))}
          </div>
        </DimmingCarousel>

        <p className="text-lg mb-8 text-gray-300">
          PET is based on an earlier versions called ADB (after Deep Blue) that
          I worked on from 2007-2011. It was exhibited at SIGGRAPH, and received
          a special mention from both the Japan Media Arts Festival, and VIDA
          Art and Artificial Life Awards.
        </p>

        <DimmingCarousel className="adb-video-container">
          <video
            src={adbItems[0].src}
            alt={adbItems[0].alt}
            className="adb-video"
            controls
            muted
            autoPlay
            loop
          />
        </DimmingCarousel>
        <p className="text-lg mb-8 text-gray-300">
          Dreaming of a more robust and expressive robot, I picked up the
          project again in 2024, now as PET. I believe the time is right to
          bring the project forward. In the past few years serious attempts to
          produce consumer robots at scale have been undertaken. It is important
          to introduce alternative approaches to robot design.
        </p>
      </div>

      <hr className="section-divider" />

      <div id="blanket">
        <h1 className="text-3xl font-light mb-4 tracking-tight">
          Blanket Project
        </h1>
        <p className="text-lg mb-8 text-gray-300">
          The Blanket Project also explores the possibility of intimacy between
          a robot and a human. Its mechanical form is derived from a wireframe
          mesh, as used in computer graphics, where each vertex is capable of
          independently moving to create a dynamic, deformable architecture.
          Coordinating the movements of the vertices produces different
          postures, and movement patterns such as gaits. The robot was remote
          controlled by a human operator. Between 2004 and 2008 the Blanket was
          exhibited worldwide including at Ars Electronica, Future Physical, on
          Japanese television and more. In the future I hope to come back to
          this project as well to improve its design and functionality.
        </p>
        <DimmingCarousel className="adb-video-container">
          <video
            src={blanketItems[0].src}
            alt={blanketItems[0].alt}
            className="adb-video"
            controls
            muted
            autoPlay
            loop
          />
        </DimmingCarousel>
      </div>
    </div>
  );
}

export default Robots;
