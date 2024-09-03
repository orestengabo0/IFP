import React, { useEffect, useState } from "react";
import JobChoice from "./components/JobChoice/JobChoice";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import SignupForm from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import CreateProject from "./components/NewProject/CreateProject";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import ProjectCreated from "./components/SuccessPopUp/ProjectCreated";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [notifications, setNotifications] = useState<
    Array<{ id: string; text: string; time: string }>
  >([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = [
        {
          id: "1",
          text: "Your Latest proposal has been turned down and now you can submit a new one.",
          time: "2 hours",
        },
        {
          id: "2",
          text: "Your Latest proposal has been accepted.",
          time: "1 hour",
        },
        {
          id: "4",
          text: "Your Latest proposal has been accepted.",
          time: "5 hour",
        }
      ];
      setNotifications(data)
    };
    fetchNotifications()
  },[]);

  return (
    <Router>
      <Notification notificationDay="Today" notifications={notifications} />
    </Router>
  );
};

export default App;
