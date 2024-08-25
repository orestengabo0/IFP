import React from "react";
import styles from "./WelcomePage.module.css";
import logo from "../../assets/Logo.svg";

const WelcomePage = () => {
  return (
    <div className={`welcomePage ${styles.welcomePage}`}>
      <div className="d-flex justify-content-center pt-5">
        <span className="text-white fw-bold fs-1">
          <img src={logo} alt="A logo" />
          IFP
        </span>
      </div>
      <div className="mt-5 pt-5">
        <p className="text-center text-white fw-bold fs-1">
          Get In Touch with Farmers
        </p>
        <p className="text-center text-white fw-bold fs-1">
          Sponsors and Middleman
        </p>
      </div>
      <div className="text-center mt-5">
        <button className={`button ${styles.button} text-white fw-semibold mx-5`}>Sign In</button>
        <button className={`button ${styles.button} text-white fw-semibold me-5`}>Login</button>
      </div>
    </div>
  );
};

export default WelcomePage;
