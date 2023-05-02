import React, { useState, useEffect } from "react";
import { auth, db } from "../Firebase/firebaseConfig";
import { onValue, ref } from "firebase/database";
import "./Dashboard.css";

const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [items, setItems] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const userRef = ref(db, "users/" + auth.currentUser.uid + "/userInfo");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setFirstName(data.firstName);
      setLastName(data.lastName);
    });

    const itemsRef = ref(db, "items");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const itemsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setItems(itemsArray);
    });

    const tasksRef = ref(db, "tasks");
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      const tasksArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setTasks(tasksArray);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <h1>
        Welcome, {firstName} {lastName}!
      </h1>
      <div className="items-container">
        <h2>Items</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{item.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="deadlines-container">
        <h2>Today's Deadlines</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.task}</td>
                <td>{task.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pending-tasks-container">
        <h2>Pending Tasks</h2>
        <ul>
          <li>Task 4</li>
          <li>Task 5</li>
          <li>Task 6</li>
        </ul>
      </div>
      <div className="progress-report-container">
        <h2>Progress Report</h2>
        <p>Your progress so far: 50%</p>
      </div>
    </div>
  );
};

export default Dashboard;
