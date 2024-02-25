import Header from "./Header";
import SidebarButton from "./SidebarButton";
import React, { useState } from "react";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Dashboard() {
  const [streak, setStreak] = useState(5);
  const [turkey, setTurkey] = useState(2);

  return (
    <>
      <Header />
      <SidebarButton />
      <h1>Dashboard</h1>
      <h2>Profile Username Here</h2>
      <div>Image and Timer Here</div>
      <div>Motivational Message</div>
      <div>
        <a style={{ textAlign: "center", margin: 50 }}>Streak: {streak}</a>
        <a style={{ textAlign: "center", margin: 50 }}>
          Largest Turkey: {turkey}
        </a>
      </div>
    </>
  );
}

export default Dashboard;
