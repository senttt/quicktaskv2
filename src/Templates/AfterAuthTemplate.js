import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./AfterAuthTemplate.css";

function AfterAuthTemplate() {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate("./login");
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">QuickTask</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/user-accounts">User Accounts</Link>
        </li>
        <li>
          <Link to="/task-management">Task Management</Link>
        </li>
        <li>
          <Link to="/task-tracker">Task Tracker</Link>
        </li>
        <li>
          <Link to="/data-analysis">Data Analysis</Link>
        </li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AfterAuthTemplate;
