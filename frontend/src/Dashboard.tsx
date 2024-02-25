import { Messages } from "./Messages";
import Header from "./Header";
import SidebarButton from "./SidebarButton";
import { useState } from "react";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Dashboard() {
    const [streak, setStreak] = useState(5)
    const [turkey, setTurkey] = useState(2)
    let index = getRandomInt(0,8)
    const [msg, setMsg] = useState(Messages[index])

    return (
        <>
            <Header />
            <SidebarButton />
            <h1>Dashboard</h1>
            <h2>Profile Username Here</h2>
            <div>Image and Timer Here</div>
            <div>{msg}</div>
            <div>
                <a style={{textAlign: "center", margin: 50}}>Streak: {streak}</a>
                <a style={{textAlign: "center", margin: 50}}>Largest Turkey: {turkey}</a>
            </div>
        </>
    )
}
export default Dashboard
