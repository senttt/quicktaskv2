import React from 'react';

const TaskTracker = () => {
  return (
    <div>
      <div>
        <div className="sidebar">
          <div className="logo"></div>

          <div className="user-info">
            <span className="username">John Doe</span>
            <span className="sign-out">
              <a href="#">X</a>
            </span>
          </div>
        </div>
        <div className="main">
          <header1>
            <h1>Task Tracker</h1>
          </header1>
          <header2>
            <h1>Today's Tasks</h1>
          </header2>
          <div className="dashboard-container">
            <div className="yellow-panel">
              <h2>Name of Task</h2>
              <div className="task-list"></div>
            </div>
            <div className="yellow-panel">
              <h2>Current Status</h2>
              <div className="progress-list"></div>
            </div>
            <div className="green-panel">
              <h2>Due Date</h2>
              <div className="task-list"></div>
            </div>
          </div>
        </div>
        <center>
          <table>
            <tbody>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="number" /></td>
              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="number" /></td>
              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="number" /></td>
              </tr>
            </tbody>
          </table>
        </center>
        <input type="button" className="anybutton1" id="myab" value="Delete" />
        <input type="button" className="anybutton2" id="myab" value="Edit" />
        <input type="button" className="anybutton3" id="myab" value="Add" />
      </div>
    </div>
  );
}

export default TaskTracker;
