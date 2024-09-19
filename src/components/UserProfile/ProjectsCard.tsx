import React from "react";
import styles from "./UserProfile.module.css";

interface CardProps {
    projectImg: string,
    projectName: string
}

const ProjectsCard = ({projectImg, projectName}:CardProps) => {
  return (
    <div className={`${styles.container} p-3 bg-success-subtle d-flex justify-content-center rounded-4`}>
      <div>
      <img src={projectImg} alt="" className={`${styles.projectImage}`} />
        <div className="bg-white p-2 px-4 rounded-5 text-success mt-3">
          {projectName}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
