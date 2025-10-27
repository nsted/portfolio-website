import React, { useRef, useEffect, useState } from "react";

function DimmingCarousel({ children, className = "" }) {
  const [opacity, setOpacity] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          // Calculate opacity based on visibility ratio
          // When fully in view (ratio = 1), opacity = 1
          // When partially out (ratio < 1), gradually dim
          // Minimum opacity is 0.33 (33%), maximum is 1.0 (100%)
          const newOpacity = 0.33 + Math.pow(ratio, 0.5) * 0.67;

          setOpacity(newOpacity);
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-20% 0px -20% 0px", // Creates a center-focused viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity,
        transition: "opacity 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}

export default DimmingCarousel;
