import React from "react";

interface Props {
  status: string,
  statusNum: string,
  bgColor: string
}

const ProposalStats = ({status, statusNum, bgColor}: Props) => {
  return (
    <div className="text-center me-1">
      <div className={`d-flex justify-content-center bg-${bgColor} rounded-4`}>
        <div className="p-3">
          <h5>{status}</h5>
          <p className="fs-5 fw-semibold">{statusNum}</p>
        </div>
      </div>
    </div>
  );
};

export default ProposalStats;
