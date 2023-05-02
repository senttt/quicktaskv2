import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./UserAccounts.css";

function UserAccounts() {
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      const users = snapshot.val();
      const names = Object.values(users).map((user) => user.userInfo.firstName);
      setUserNames(names);
    });
    console.log(userNames);
  }, []);

  return (
    <div className="user-accounts">
      {userNames.map((name) => (
        <div key={name} className="user-account">
          {name}
        </div>
      ))}
    </div>
  );
}

export default UserAccounts;
