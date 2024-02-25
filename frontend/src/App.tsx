import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";
import NoPage from "./NoPage";
import "./App.css";
import Home from "./Home";
import ChartComponent from "./Stats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/stats" element={<ChartComponent />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
