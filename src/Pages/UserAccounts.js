import React from "react";
import "./UserAccounts.css";

function UserAccounts() {
  const names = [
    "John",
    "Mary",
    "David",
    "Sarah",
    "Vincent",
    "James",
    "Clyde",
    "Bax",
    "Michael",
    "Christina Pascua",
  ];

  return (
    <div className="user-accounts">
      {names.map((name) => (
        <div key={name} className="user-account">
          {name}
        </div>
      ))}
    </div>
  );
}

export default UserAccounts;
