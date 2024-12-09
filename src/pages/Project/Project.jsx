import { useParams, useNavigate } from "react-router-dom";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import BtnGhPages from "../../components/btnGhPages/btnGhPages";
import { FaArrowLeft } from "react-icons/fa";
import { projects } from "../../helpers/projectsList";
import "./style.css";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  const navigate = useNavigate();
  return (
    <>
      <main className="section">
        <div className="container">
          <FaArrowLeft
            className="arrow-back"
            style={{ width: "30px", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>

            <img src={project.img} className="project-details__cover" />

            <div className="project-details__desc">
              <p>{project.skills}</p>
            </div>
            <div className="buttons">
              <BtnGitHub link={project.gitHubLink} />
              <BtnGhPages link={project.ghPages} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
