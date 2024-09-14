import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import farmer from "../../assets/Group 271.png";
import styles from "./ProjectDesc.module.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ProjectDesc = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const goToFundPage = () => {
    navigate("/funds/deposit/card");
  };

  const handleNotFound = () => {
    setShowModal(true);
  };

  const handleConfirmCancel = () => {
    setShowModal(false);
    navigate('/dashboard')
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-3 pt-3">
      <div className="d-flex justify-content-evenly">
        <div className="back-button" onClick={handleBack}>
          <PiCaretLeftBold color="green" size={30} />
        </div>
        <h1>Project Description</h1>
      </div>
      <h3 className="text-center mt-3 text-success">The land caring porject</h3>
      <div>
        <div>
          <img src={farmer} alt="" className={`${styles["project-image"]}`}/>
        </div>
        <p className="mt-3 p-3">
          This project aims at making the land look good and smart through the
          use of approved manure and irrigation system which is an ease for any
          pe rson
        </p>
        <div className="d-flex justify-content-between">
          <div>
            <span className="fw-semibold text-success d-block">
              Project Start
            </span>
            <span>12 may 2022</span>
          </div>
          <div>
            <span className="fw-semibold text-success d-block">
              Project End
            </span>
            <span>12 sept 2023</span>
          </div>
        </div>
        <div className="mt-3">
          <h5 className="fw-semibold text-success">Make an action</h5>
          <div className="d-flex">
            <button
              className="btn btn-success fw-semibold p-2 mx-3"
              onClick={goToFundPage}
            >
              Fund
            </button>
            <button className="btn btn-danger fw-semibold mx-3 p-2" onClick={handleNotFound}>
              Not Fund
            </button>
          </div>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Cancel Funding</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to cancel funding for this project?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleConfirmCancel}>
              Yes, Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectDesc;
