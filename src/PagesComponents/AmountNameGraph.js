import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import NameAmountGraph from "./NameAmountGraph";

const AmountNameGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const itemsRef = ref(db, "items");

    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemArray = Object.keys(data).map((itemId) => ({
          id: itemId,
          ...data[itemId],
        }));

        // Group items by name
        const testItems = itemArray.reduce((acc, item) => {
          if (!acc[item.name]) {
            acc[item.name] = { name: item.name, amount: 0 };
          }
          acc[item.name].amount += parseInt(item.amount);
          return acc;
        }, {});

        const data = Object.values(testItems);

        setData(data);
      }
    });
  }, []);

  return (
    <div>
      <h2>Name and Amount Sold</h2>
      <NameAmountGraph data={data} />
    </div>
  );
};

export default AmountNameGraph;
