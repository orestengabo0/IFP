import { useState } from "react";
import styles from "./FundProject.module.css";
import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const ChooseAmount = () => {
  const [formData, setFormData] = useState({
    amount: "",
  });

  const handleFormSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    navigate('/funds/deposit/confirm-payment')
    setFormData({
      amount: ""
    })
  }

  const accordions = [
    { id: 1, className: "bg-success-subtle" },
    { id: 2, className: "bg-success" },
    { id: 3, className: "bg-success-subtle" },
  ];

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
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
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
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

export default ChooseAmount;
