import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const DataAnalysis = () => {
  const [amountData, setAmountData] = useState([]);

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

        // Filter sales from the last 24 hours
        const now = new Date().getTime();
        const last24HoursItems = itemArray.filter((item) => {
          const timestamp = new Date(item.timestamp).getTime();
          const timeDiff = now - timestamp;
          const hoursDiff = timeDiff / (1000 * 3600);
          return hoursDiff <= 24;
        });

        // Group sales by hour
        const hourCategories = Array(24)
          .fill(0)
          .map((_, index) => {
            const date = new Date();
            date.setHours(index, 0, 0, 0);
            return date;
          });

        const groupedItems = last24HoursItems.reduce((acc, item) => {
          const timestamp = new Date(item.timestamp).getTime();
          const hour = hourCategories.findIndex(
            (category) =>
              timestamp >= category.getTime() &&
              timestamp < category.getTime() + 3600 * 1000
          );
          if (hour >= 0) {
            if (!acc[hour]) {
              acc[hour] = [];
            }
            acc[hour].push(item);
          }
          return acc;
        }, {});

        // Aggregate sales data by hour
        const amountData = hourCategories.map((hourCategory, index) => {
          const value = groupedItems[index]
            ? groupedItems[index].reduce(
                (acc, item) => acc + parseInt(item.amount),
                0
              )
            : 0;
          return {
            name: hourCategory.toLocaleTimeString([], {
              hour: "2-digit",
              hour12: true,
            }),
            value,
          };
        });

        setAmountData(amountData);
      }
    });
  }, []);

  return (
    <div>
      <h2>Amount Sold in Last 24 Hours</h2>
      <BarChart width={800} height={400} data={amountData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default DataAnalysis;
