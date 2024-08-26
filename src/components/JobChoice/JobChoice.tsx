import React, { useState } from "react";
import styles from "./JobChoice.module.css";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const JobChoice = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleCheckBoxClick = (job: string) => {
    setSelectedJob(job);
  };

  return (
    <div className={styles.jobChoice}>
      <div>
        <h4 className="text-success fs-2 fw-bold">Choose your job</h4>
        <form className={`jobChoiceForm ${styles.jobChoiceForm}`}>
          <div
            className={styles.inputGroup}
            onClick={() => handleCheckBoxClick("Farmer")}
          >
            <span className={styles.icon}>
              {selectedJob === "Farmer" ? (
                <MdRadioButtonChecked size={30} color="green" />
              ) : (
                <MdRadioButtonUnchecked size={30} color="green" />
              )}
            </span>
            <p className="fs-3">Farmer</p>
          </div>
          <div
            className={styles.inputGroup}
            onClick={() => handleCheckBoxClick("Sponsor")}
          >
            <span className={styles.icon}>
              {selectedJob === "Sponsor" ? (
                <MdRadioButtonChecked size={30} color="green" />
              ) : (
                <MdRadioButtonUnchecked size={30} color="green" />
              )}
            </span>
            <p className="fs-3">Sponsor</p>
          </div>
          <div
            className={styles.inputGroup}
            onClick={() => handleCheckBoxClick("Middle Man")}
          >
            <span className={styles.icon}>
              {selectedJob === "Middle Man" ? (
                <MdRadioButtonChecked size={30} color="green" />
              ) : (
                <MdRadioButtonUnchecked size={30} color="green" />
              )}
            </span>
            <p className="fs-3">Middle Man</p>
          </div>
        </form>
        <button className={`${styles.submitButton} mt-5 fw-semibold fs-4`}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default JobChoice;
