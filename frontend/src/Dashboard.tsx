import { Messages } from "./Messages";
import Header from "./Header";
import SidebarButton from "./SidebarButton";
import { useEffect, useState } from "react";
import Timer from "./Timer";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Dashboard() {
    const [streak, setStreak] = useState(5)
    const [turkey, setTurkey] = useState(2)
    let index = getRandomInt(0,8)
    const [msg, setMsg] = useState(Messages[index])
    const time = 60

  return (
    <>
      <Header />
      <SidebarButton />
      <h1 style={{margin: 100}}>Dashboard</h1>
      <h2>Username: {localStorage.getItem("username")}</h2>
      <h2>Name: {localStorage.getItem("name")}</h2>
      <Timer initialTime={time} />
      <div>{msg}</div>
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
