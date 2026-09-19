import React from "react";
import Counter from "../components/Counter";

const DashboardPage = () => {
  console.log("Counter component rendered");

  return (
    <div>
      <h2>Dashboard Page</h2>

      <Counter></Counter>
      <ul>
        <li>Dashboard items 1 </li>
        <li>Dashboard items 2 </li>
        <li>Dashboard items 3 </li>
      </ul>
    </div>
  );
};

export default DashboardPage;
