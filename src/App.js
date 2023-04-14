import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import BeforeAuthTemplate from "./Templates/BeforeAuthTemplate";
import AfterAuthTemplate from "./Templates/AfterAuthTemplate";
import UserAccounts from "./Pages/UserAccounts";
import TaskManagement from "./Pages/TaskManagement";
import TaskTracker from "./Pages/TaskTracker";
import DataAnalysis from "./Pages/DataAnalysis";
import Dashboard from "./Pages/Dashboard";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <Router>
      <div className={isAuth ? "wrapper" : ""}>
        {isAuth ? <AfterAuthTemplate /> : <BeforeAuthTemplate />}
        <div className={isAuth ? "main-content" : ""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user-accounts" element={<UserAccounts />} />
            <Route path="/task-management" element={<TaskManagement />} />
            <Route path="/task-tracker" element={<TaskTracker />} />
            <Route path="/data-analysis" element={<DataAnalysis />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
