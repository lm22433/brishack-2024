import { useState } from "react"
import { Messages } from "./Messages";

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Dashboard() {
    const [streak, setStreak] = useState(5)
    const [turkey, setTurkey] = useState(2)
    let index = getRandomInt(0,5)
    const [msg, setMsg] = useState(Messages[index])

    return (
      <>
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