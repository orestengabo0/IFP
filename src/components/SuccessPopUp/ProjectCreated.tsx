import React from "react";
import styles from "./ProjectCreated.module.css";

interface Props {
    confirmText: string,
    buttonColor: string
}

const ProjectCreated = ({confirmText, buttonColor}:Props) => {
  return (
    <div className={`container ${styles.container} d-flex align-items-center justify-content-center`}>
      <div className={`notification ${styles.notification} p-3`}>
        <p className="fw-semibold fs-2 text-center">
          {confirmText}
        </p>
        <div className="d-flex justify-content-center">
          <button className={`buttonOk ${styles.buttonOk} ${buttonColor} text-white pt-1 pb-1 px-3 fs-3`}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreated;
