import React, { useState } from "react";
import { PiCaretLeftBold } from "react-icons/pi";
import styles from "./FundProject.module.css";
import { useNavigate } from "react-router-dom";

const FundProject = () => {
  const [formData, setFormData] = useState({
    account: "",
    expiryDate: "",
    cvv: "",
    names: "",
  });

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    navigate("/funds/deposit/amount");
    setFormData({
      names: "",
      expiryDate: "",
      cvv: "",
      account: "",
    });
  };

  const accordions = [
    { id: 1, className: "bg-success" },
    { id: 2, className: "bg-success-subtle" },
    { id: 3, className: "bg-success-subtle" },
  ];

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles["back-button"]}`} onClick={handleBack}>
        <PiCaretLeftBold color="green" size={30} />
      </div>
      <h3 className="text-success mb-5 fw-semibold">Fund Project</h3>
      <div className="d-flex mb-5">
        {accordions.map((accordion) => (
          <div key={accordion.id} className={`${styles.accordion} ${accordion.className} rounded-2`}></div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="account" className="form-label fs-5">
            Enter your Bank Account
          </label>
          <input
            type="text"
            name="account"
            className="fs-5 text-dark"
            value={formData.account}
            onChange={(e) =>
              setFormData({ ...formData, account: e.target.value })
            }
            required
          />
        </div>
        <div className="d-flex">
          <div className="mb-3 me-3">
            <label htmlFor="account" className="form-label fs-5">
              Expiry date
            </label>
            <input
              type="date"
              name="expiryDate"
              className="fs-5 text-dark"
              value={formData.expiryDate}
              onChange={(e) =>
                setFormData({ ...formData, expiryDate: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="account" className="form-label fs-5">
              Cvv
            </label>
            <input
              name="cvv"
              type="text"
              className="fs-5 text-dark"
              value={formData.cvv}
              onChange={(e) =>
                setFormData({ ...formData, cvv: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="account" className="form-label fs-5">
            Enter your names
          </label>
          <input
            name="names"
            type="text"
            className="fs-5 text-dark"
            value={formData.names}
            onChange={(e) =>
              setFormData({ ...formData, names: e.target.value })
            }
            required
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success fw-semibold fs-5">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FundProject;
