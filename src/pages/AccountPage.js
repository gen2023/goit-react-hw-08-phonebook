import React from "react";
import Login from "../components/UserRoom/Login";
import Register from "../components/UserRoom/Register";

const AccountPage = () => (
  <div className="content contentAccount">
    <div className="leftContent">
      <Register />
    </div>
    <div className="rightContent">
      <Login />
    </div>
  </div>
);

export default AccountPage;
