import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className="projects-grid">
          {project.map((data) => (
            <div key={data.key} className="project-card" data-aos="flip-right" data-aos-duration="1000">
              <div className="card bg-white text-black">
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.demo} className="btn btn-primary mx-2">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-warning mx-2">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
