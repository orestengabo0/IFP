import ProposalCard from "../Dashboard/ProposalCard";
import ProposalStats from "../Dashboard/ProposalStats";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const DashboardSponsors = () => {
  return (
    <div className="pt-5">
      <Header />
      <div className="p-3 mt-5">
        <h5 className="fw-semibold">Proposal Statistics</h5>
        <div className="d-flex">
          <ProposalStats
            status="Funded"
            statusNum="50"
            bgColor="success-subtle"
          />
          <ProposalStats status="Approved" statusNum="50" bgColor="success" />
          <ProposalStats status="Rejected" statusNum="50" bgColor="danger" />
        </div>
      </div>
      <div className="p-3">
        <div className="d-flex justify-content-between mb-3">
          <h3 className="mt-2 fw-semibold">New Proposals</h3>
          <input
            type="date"
            className="border border-success border-2 rounded-5"
            style={{ maxHeight: "50px", maxWidth: "145px" }}
          />
        </div>
        <div>
          <ProposalCard
            proposalHeading="The animal food support project"
            proposalDescription="This project aims at producing adequate food supplies to farmers and
            other users."
          />
        </div>
        <div className="mt-3">
          <ProposalCard
            proposalHeading="The animal food support project"
            proposalDescription="This project aims at producing adequate food supplies to farmers and
            other users."
          />
        </div>
      </div>
      {/* Other sections */}
      <Footer />
    </div>
  );
};

export default DashboardSponsors;
