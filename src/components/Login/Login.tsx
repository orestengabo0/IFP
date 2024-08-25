import React, { useState } from "react";
import styles from "../SignUp/SignUp.module.css";
import { FaApple, FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import SignUpWith from "../SignUp/SignUpWith";

const Login = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setChecked((prevCheck) => !prevCheck);
  };

  return (
    <div className={styles.signupForm}>
      <p className="text-success fs-2 fw-bold text-right">Login</p>
      <p className="text-black fs-5">Welcome back to the app</p>
      <form className="mt-5">
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
          <MdLockOutline className={styles.icon} size={20} />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <div className={`${styles.inputGroup} d-flex justify-content-between`}>
          <div>
            <span onClick={handleCheckBoxClick} className={`${styles.icon}`}>
              {!isChecked ? (
                <ImCheckboxUnchecked
                  className={`${styles.icon}`}
                  size={20}
                  color="green"
                />
              ) : (
                <ImCheckboxChecked
                  className={`${styles.icon} `}
                  size={20}
                  color="green"
                />
              )}
            </span>
            <p className="mx-5">Remember me</p>
          </div>
          <p className="text-danger">Forgot password?</p>
        </div>
        <button type="submit" className={`${styles.submitButton} fw-semibold fs-4`}>
          Login
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

export default Login;
