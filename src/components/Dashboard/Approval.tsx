import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import Header from "../Header/Header";
import ProposalStats from "./ProposalStats";
import NewProposals from "./NewProposals";
import BarChart from "./BarChart";
import Footer from "../Footer/Footer";

interface DashboardProps {
  selectedTab: "All" | "Approved" | "Unapproved";
  onTabChange: (tab: "All" | "Approved" | "Unapproved") => void;
}

const Approvals: React.FC<DashboardProps> = ({ selectedTab, onTabChange }) => {
  // Sample data
  const approvedContent = (
    <div>
      <p className="text-success">Approved Item 1</p>
      <p className="text-success">Approved Item 2</p>
    </div>
  );

  const unapprovedContent = (
    <div>
      <p className="text-danger">Unapproved Item 1</p>
      <p className="text-danger">Unapproved Item 2</p>
    </div>
  );

  const allContent = (
    <>
      <p className="fs-5 fw-semibold">Proposal Statistics</p>
      <div className="d-flex">
        <ProposalStats
          status="Funded"
          statusNum="50"
          bgColor="success-subtle"
        />
        <ProposalStats status="Finished" statusNum="50" bgColor="success" />
        <ProposalStats status="Not Done" statusNum="50" bgColor="danger" />
      </div>
    </>
  );

  // Function to dynamically render content based on the selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "Approved":
        return approvedContent;
      case "Unapproved":
        return unapprovedContent;
      case "All":
      default:
        return allContent;
    }
  };

  return (
    <div className="d-flex align-items-center flex-column">
      <Header />
      <h3 className="mt-3">Dashboard</h3>
      <div className={`d-flex ${styles.dashboard} justify-content-evenly p-3`}>
        <button
          className={`btn btn-success p-2 rounded-5 fs-5 fw-semibold ${
            selectedTab === "All" ? styles.active : ""
          }`}
          onClick={() => onTabChange("All")}
        >
          All
        </button>
        <button
          className={`btn bg-success-subtle p-2 pb-1 pt-1 px-0 rounded-5 fs-5 fw-semibold mx-2 ${
            selectedTab === "Approved" ? styles.active : ""
          }`}
          onClick={() => onTabChange("Approved")}
        >
          Approved
        </button>
        <button
          className={`btn bg-success-subtle rounded-5 fs-5 fw-semibold ${
            selectedTab === "Unapproved" ? styles.active : ""
          }`}
          onClick={() => onTabChange("Unapproved")}
        >
          Unapproved
        </button>
      </div>
      {/* Dynamically render content based on selected tab */}
      <div className="mt-3">{renderContent()}</div>
      <div className="p-3">
        <div className="d-flex justify-content-between mb-3">
          <h3 className="mt-1">New Proposals</h3>
          <input type="date" className="border border-success border-2 rounded-5" />
        </div>
        <NewProposals />
      </div>
      <div>
        <BarChart />
      </div>
      <Footer />
    </div>
  );
};

export default Approvals;