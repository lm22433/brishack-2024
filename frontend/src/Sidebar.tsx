import React from "react";
import "./Sidebar.css";
import { Link, Outlet } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="../dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
      <Link to="../leaderboard">
        <button>Leaderboard</button>
      </Link>
      <Link to="../stats">
        <button>Statistics</button>
      </Link>
      <button><a href="https://www.nhs.uk/better-health/quit-smoking/vaping-to-quit-smoking/#:~:text=To%20keep%20yourself%20on%20track,extend%20the%20time%20between%20vaping">NHS Advice</a></button>
      <Link to="../login">
        <div className="logout">
        <button
          onClick={() => {
            localStorage.removeItem("userId");
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("name");
          }}
        >
          Logout
        </button>
        </div>
      </Link>
      <Outlet />
    </div>
  );
};

export default Sidebar;
