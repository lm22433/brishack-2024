import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login"
import Leaderboard from "./Leaderboard"
import Layout from "./Layout"
import Dashboard from "./Dashboard";
import NoPage from "./NoPage";
import './App.css'
import { useState } from "react";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    
    return(
        <header>
            <div className="logo">
                
            </div>
        </header>
    )
}