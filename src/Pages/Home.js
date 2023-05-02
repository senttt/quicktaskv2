import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <section>
        <h1>Organize your workload</h1>
        <h1>
          <span style={{ color: "gold" }}>with</span>{" "}
          <span style={{ color: "green" }}>QuickTask</span>
        </h1>

        <br />
        <br />
        <br />

        <p>
          A Progressive Web Application for Business Progress Monitoring in
          Small Retail.
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p>With QuickTask, you can:</p>
        <ul>
          <li>Track the status of your business processes</li>
          <li>Identify bottlenecks and inefficiencies</li>
          <li>Analyze process performance over time</li>
          <li>And much more!</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 QuickTask</p>
      </footer>
    </div>
  );
}

export default Home;
