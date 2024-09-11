import React from "react";
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

const App = () => {
  const notificationDay = new Date().toLocaleDateString(); // Get current date

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/register" element={<SignupForm />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/funds/deposit/card" element={<FundProject />}></Route>
        <Route path="/funds/deposit/amount" element={<ChooseAmount />}></Route>
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
      </Routes>
    </Router>
  );
};

export default App;
