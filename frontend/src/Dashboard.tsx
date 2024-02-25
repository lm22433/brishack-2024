import { useState } from "react"

function Dashboard() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div></div>
        <h1>Dashboard</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Dashboard count is {count}
          </button>
        </div>
      </>
    )
  }
  
  export default Dashboard