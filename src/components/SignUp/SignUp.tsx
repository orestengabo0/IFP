import React, { useState } from "react";
import { FaRegUser, FaRegEnvelope, FaApple } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import styles from "./SignUp.module.css";
import SignUpWith from "./SignUpWith";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [isChecked, setChecked] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  });

  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    if (!formData.termsAndConditions) {
      alert("Please accept the terms and conditions.");
      return;
    }

    setPasswordError(null);
    console.log(formData);

    navigate("/dashboard");

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
    });
    setChecked(false);
  };

  const handleCheckBoxClick = () => {
    setChecked((prevCheck) => !prevCheck);
    setFormData({ ...formData, termsAndConditions: !isChecked });
  };

  return (
    <div className={styles.signupForm}>
      <p className="text-success fs-2 fw-bold text-right">Sign Up</p>
      <p className="text-black fs-5 mb-3">Welcome to the app</p>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.inputGroup}>
          <FaRegUser className={styles.icon} size={20} />
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
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
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required
          />
        </div>
        {passwordError && (
          <p className="text-danger fs-6 mt-1 mb-3">{passwordError}</p>
        )}

        <div className={`${styles.inputGroup}`}>
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
          <p className="mx-5">I understood the terms and conditions</p>
        </div>

        <button
          type="submit"
          className={`btn btn-success ${styles.submitButton} fw-semibold fs-4`}
        >
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
