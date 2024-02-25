import { useState } from "react"

function Leaderboard() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div></div>
        <h1>LeaderBoard</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Leaderboard count is {count}
          </button>
        </div>
      </>
    )
  }
  
  export default Leaderboard