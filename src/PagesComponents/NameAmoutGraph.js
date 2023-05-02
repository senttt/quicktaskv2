import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const NameAmountGraph = ({ data }) => {
  return (
    <BarChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" fill="#8884d8" />
    </BarChart>
  );
};

export default NameAmountGraph;
