import { useState } from 'react'
import './App.css'
import Header from './Header'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
      </div>
    </>
  )
}

export default Login