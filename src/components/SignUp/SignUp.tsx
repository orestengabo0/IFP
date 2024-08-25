import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaRegEnvelope, FaApple } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked, ImFontSize } from "react-icons/im";
import styles from "./SignUp.module.css";
import SignUpWith from "./SignUpWith";
import { FcGoogle } from "react-icons/fc";

const SignupForm: React.FC = () => {
  const [isChecked, setChecked] = useState(false)

  const handleCheckBoxClick = () => {
    setChecked((prevCheck) => !prevCheck)
  }

  return (
    <div className={styles.signupForm}>
      <p className="text-success fs-2 fw-bold text-right">Sign Up</p>
      <p className="text-black fs-5">Welcome to the app</p>
      <form>
        <div className={styles.inputGroup}>
          <FaRegUser className={styles.icon} size={20} />
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <FaRegEnvelope className={styles.icon} size={20} />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <MdLockOutline className={styles.icon} size={20} />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <MdLockOutline className={styles.icon} size={20} />
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
        </div>

        <div className={`${styles.inputGroup}`}>
          <span onClick={handleCheckBoxClick} className={`${styles.icon}`}>
            {!isChecked ? (<ImCheckboxUnchecked className={`${styles.icon}`} size={20} color="green" />) :
            (<ImCheckboxChecked className={`${styles.icon} `} size={20} color="green" />)}
          </span>
          <p className="mx-5">I understood the terms and conditions</p>
        </div>

        <button type="submit" className={`${styles.submitButton} fw-semibold fs-4`}>
          Sign Up
        </button>
        <h4 className="text-center mt-3">or</h4>
        <div className="d-flex justify-content-between px-5 mt-3">
          <SignUpWith Icon={FcGoogle} />
          <SignUpWith Icon={FaApple} />
          <SignUpWith Icon={FcGoogle} />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
