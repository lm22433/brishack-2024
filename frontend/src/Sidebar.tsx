import React from 'react';
import './Sidebar.css';
import { Link, Outlet } from 'react-router-dom';


const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
        <div className='top'>
            <Link to="../dashboard"><button>Dashboard</button></Link>
        </div>  
        <Link to="../leaderboard"><button>Leaderboard</button></Link>
        <Link to="../stats"><button>Statistics</button></Link>
        <Link to="../login"><button>Logout</button></Link>    
        <Outlet/>
    </div>
  );
};

export default Sidebar;
