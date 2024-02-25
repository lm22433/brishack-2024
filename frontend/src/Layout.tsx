import { Outlet, Link } from "react-router-dom";
import "./App.css"

function Layout() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><button>Dashboard</button></Link>
                    </li>
                    <li>
                        <Link to="/login"><button>Login</button></Link>
                    </li>
                    <li>
                        <Link to="/leaderboard"><button>Leaderboard</button></Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )

}

export default Layout