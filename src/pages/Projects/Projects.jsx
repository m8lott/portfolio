import { useState, useEffect } from "react";
import Project from "../../components/project/Project";
import { projects } from "../../helpers/projectsList";
import "./style.css";

const Projects = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <div className={!visible ? "hide-projects" : "visible-projects"}>
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Projects;
