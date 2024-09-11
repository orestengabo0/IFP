import styles from "./WelcomePage.module.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

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
      <div className="mt-5">
        <div className="text-center">
          <Link
            to={"/register"}
            className={`button ${styles.button} text-white text-decoration-none fs-5 d-block fw-semibold mx-5 rounded-5`}
          >
            Sign In
          </Link>
        </div>
        <div className="text-center mt-5">
          <Link
            to={"/login"}
            className={`button ${styles.button} text-white text-decoration-none fs-5 d-block fw-semibold mx-5 rounded-5`}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
