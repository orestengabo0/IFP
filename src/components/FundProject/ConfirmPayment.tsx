import { PiCaretLeftBold } from "react-icons/pi";
import styles from "./FundProject.module.css";
import { useNavigate } from "react-router-dom";
import SuccessPopUp from "../SuccessPopUp/SuccessPopup";

const ConfirmPayment = () => {
  const accordions = [
    { id: 1, className: "bg-success-subtle" },
    { id: 2, className: "bg-success-subtle" },
    { id: 3, className: "bg-success" },
  ];
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.container}>
      <div className={`${styles["back-button"]}`} onClick={handleBack}>
        <PiCaretLeftBold color="green" size={30} />
      </div>
      <h3 className="text-success mb-5 fw-semibold">Fund Project</h3>
      <div className="d-flex mb-5">
        {accordions.map((accordion) => (
          <div
            key={accordion.id}
            className={`${styles.accordion} ${accordion.className} rounded-2`}
          ></div>
        ))}
      </div>
      <div>
          <SuccessPopUp confirmText="Confirm Payment" buttonColor="success" />
          <div className="d-flex justify-content-end mt-5">
            <button className="btn btn-success fs-5 fw-semibold">Done</button>
          </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;
