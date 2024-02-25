import { useState } from 'react'
import './App.css'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div></div>
      <h1>Login</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Login count is {count}
        </button>
      </div>
    </>
  )
}

export default Login