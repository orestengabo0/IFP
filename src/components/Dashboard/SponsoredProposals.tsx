import styles from "./Dashboard.module.css";
import farmer from "../../assets/farmer_1-removebg-preview.png";

const SponsoredProposals = () => {
  return (
    <div>
      <div className="d-flex align-items-center bg-success rounded-4 p-3">
        <img src={farmer} alt="A farmer" />
        <div>
          <h6 className="text-center text-white-50">
            The animal food support project
          </h6>
          <p className="px-3 text-white-50">
            This project aims at producing adequate food supplies to farmers and
            other users.
          </p>
          <div className="d-flex justify-content-center">
            <button
              className={`btn btn-light ${styles.readMore} fs-5 fw-semibold text-success`}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsoredProposals;
