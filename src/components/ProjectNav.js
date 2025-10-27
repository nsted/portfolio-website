import React, { Fragment } from "react";

function ProjectNav({ projects }) {
  const scrollToProject = (projectId) => {
    const element = document.getElementById(projectId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 120; // Account for pt-[120px] top margin

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navStyle = {
    display: "flex",
    alignItems: "center",
    gap: 0,
    marginBottom: "-2rem",
    padding: "0",
  };

  const buttonStyle = {
    background: "transparent",
    border: "none",
    color: "#ccc",
    padding: "1rem 1.5rem",
    fontSize: "1.25rem",
    fontWeight: 300,
    cursor: "pointer",
    transition: "color 0.3s ease",
    borderRadius: "4px",
  };

  const separatorStyle = {
    color: "#666",
    margin: "0 1rem",
    fontSize: "1.5rem",
    fontWeight: 300,
  };

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  return (
    <div style={wrapperStyle}>
      <nav className="project-nav" style={navStyle}>
        {projects.map((project, index) => (
          <Fragment key={project.id}>
            {index > 0 && <span style={separatorStyle}>|</span>}
            <button
              className="project-nav-button"
              style={buttonStyle}
              onClick={() => scrollToProject(project.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#4A90E2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#ccc";
              }}
            >
              {project.name}
            </button>
          </Fragment>
        ))}
      </nav>
      <hr className="section-divider" />
    </div>
  );
}

export default ProjectNav;
