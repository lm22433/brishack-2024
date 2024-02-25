import { useState } from "react"
import Header from "./Header"

function Dashboard() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div>
          <Header/>
        </div>
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