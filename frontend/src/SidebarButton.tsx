import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './SidebarButton.css'; // Import CSS for styling

const SidebarButton: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="sidebar-button-container">
      <button className="sidebar-button" onClick={toggleSidebar}>
        <span className="icon">&equiv;</span>
      </button>
      {sidebarOpen && <Sidebar/>}
    </div>
  );
};

export default SidebarButton;
