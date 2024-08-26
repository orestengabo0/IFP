import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiGrid42 } from "react-icons/ci";
import { FaPhoneAlt, FaUser, FaRegQuestionCircle } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import styles from "./Dashboard.module.css";

const SideBar = () => {
  return (
    <div className={`container ${styles.container} d-flex justify-content-center`}>
      <div>
        <div className="d-flex">
          <IoMdCloseCircleOutline size={40} color="green" />
        </div>
        <button
          className={`dashboard ${styles.dashboard} text-success fw-normal fs-4 d-block`}
        >
          <CiGrid42 size={30} color="green" className="me-3" />
          Dashboard
        </button>
        <button
          className={`contacts ${styles.contacts} text-success fw-normal fs-4 d-block`}
        >
          <FaPhoneAlt size={30} color="green" className="me-3" />
          Contacts
        </button>
        <button
          className={`about ${styles.about} text-success fw-normal fs-4 d-block`}
        >
          <RiMessage2Line size={30} color="green" className="me-3" />
          About
        </button>
        <button
          className={`profile ${styles.profile} text-success fw-normal fs-4 d-block`}
        >
          <FaUser size={30} color="green" className="me-3" />
          Profile
        </button>
        <div className="text-success fs-3  text-center mt-5">
          <FaRegQuestionCircle size={30} color="green" />
          Settings
        </div>
      </div>
    </div>
  );
};

export default SideBar;
