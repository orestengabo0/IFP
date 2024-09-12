import { useState } from "react";
import Approvals from "./Approval";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<"All" | "Approved" | "Unapproved">("All");

  const handleTabChange = (tab: "All" | "Approved" | "Unapproved") => {
    setSelectedTab(tab);
  };

  return (
    <div className="mt-5">
      <Approvals selectedTab={selectedTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Dashboard;
