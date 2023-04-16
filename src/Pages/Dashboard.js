import React from "react";

function ProgressDashboard() {
  return (
    <div className="main">
      <header1>
        <h1>Real-Time Progress Dashboard</h1>
      </header1>

      <br />
      <br />
      <br />
      <br />

      <h3 align="left"> Today's Task </h3>
      <center>
        <div className="container1">
          <table>
            <th> Deadlines:</th>
            <tbody>
              <tr>
                <td>
                  <input type="text" name="task" />
                </td>
              </tr>

              <tr>
                <td>
                  <input type="text" name="task" />
                </td>
              </tr>

              <tr>
                <td>
                  <input type="text" name="task" />
                </td>
              </tr>
            </tbody>
          </table>

          <input type="button" className="button1" id="myab" value="Add" />
          <input type="button" className="button2" id="myab" value="Delete" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <label for="task">Pending Tasks:</label>
          <select name="pending" id="pending">
            <optgroup label="Stock Check">
              <option value="John">John</option>
              <option value="Maria">Maria</option>
            </optgroup>
            <optgroup label="Order Check">
              <option value="John">John</option>
              <option value="Maria">Maria</option>
            </optgroup>
          </select>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="container2">
            <label for="report">Progress Report:</label>
            <select name="report" id="report">
              <optgroup label="Client Owners">
                <option value="Company A"> Company A</option>
                <option value="Company B"> Company B</option>
              </optgroup>
            </select>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </center>
    </div>
  );
}

export default ProgressDashboard;
