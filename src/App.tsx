import WelcomePage from "./components/WelcomePage/WelcomePage";
import SignupForm from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Notification from "./components/Notification/NotificationList";
import FundProject from "./components/FundProject/FundProject";
import ChooseAmount from "./components/FundProject/ChooseAmount";
import ConfirmPayment from "./components/FundProject/ConfirmPayment";
import Menu from "./components/Menu/Menu";
import MyProfile from "./components/MyProfile/MyProfile";
import Dashboard from "./components/Dashboard/Approval";
import Profile from "./components/Profile/Profile";
import ContactForm from "./components/Contacts/ContactForm";
import ProjectDesc from "./components/ProjectDescription/ProjectDesc";
import DashboardSponsors from "./components/Dashboard-sponsors/DashboardSponsors";
import AboutUs from "./components/AboutUs/AboutUs";
import UserProfile from "./components/UserProfile/UserProfile";

const App = () => {
  const notificationDay = new Date().toLocaleDateString(); // Get current date

  return (
    <div style={{overflow: "hidden", boxSizing: "border-box"}}>

    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/register" element={<SignupForm />}></Route>
        <Route path="/complete-profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/funds/deposit/card" element={<FundProject />}></Route>
        <Route path="/funds/deposit/amount" element={<ChooseAmount />}></Route>
        <Route path="/contacts" element={<ContactForm />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route
          path="/funds/deposit/confirm-payment"
          element={<ConfirmPayment />}
        ></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route
          path="/notifications"
          element={<Notification notificationDay={notificationDay} />}
        />
        <Route path="/my-profile" element={<MyProfile />}></Route>
        <Route path="/dashboard" element={<Dashboard selectedTab={"All"} onTabChange={function (tab: "All" | "Approved" | "Unapproved"): void {
          throw new Error("Function not implemented.");
        } } />}></Route>
        <Route path="/sponsor-dashboard" element={<DashboardSponsors />}></Route>
        <Route path="/project-description" element={<ProjectDesc />}></Route>
        <Route path="/user-profile" element={<UserProfile />}></Route>
      </Routes>
    </Router>
    </div>
  );
};

export default App;
