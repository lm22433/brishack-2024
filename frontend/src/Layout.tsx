import { Outlet, Link } from "react-router-dom";

function Layout() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard">Leaderboard</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )

}

export default Layout