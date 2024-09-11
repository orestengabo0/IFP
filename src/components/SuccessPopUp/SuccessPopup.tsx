import styles from "./SuccessPopup.module.css";

interface Props {
  confirmText: string;
  buttonColor: string;
}

const SuccessPopUp = ({ confirmText, buttonColor }: Props) => {
  return (
    <div
      className={`d-flex justify-content-center mt-5`}
    >
      <div className={`notification ${styles.notification} p-4`}>
        <p className="fw-semibold fs-2 text-center">{confirmText}</p>
        <div className="d-flex justify-content-center">
          <button
            className={`${styles.buttonOk} btn btn-${buttonColor} text-white pt-1 pb-1 px-3 fs-3`}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopUp;
