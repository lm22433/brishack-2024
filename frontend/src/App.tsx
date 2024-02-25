import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login"
import Leaderboard from "./Leaderboard"
import Layout from "./Layout"
import Dashboard from "./Dashboard";
import NoPage from "./NoPage";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard/>}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="leaderboard" element={<Leaderboard />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
