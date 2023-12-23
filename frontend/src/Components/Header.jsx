
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navar-light bg-light">
                <a href="#" className="navbar-brand">Navbar</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/login" className="nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="/signup" className="nav-link">Signup</a>
                    </li>

                </ul>

            </nav>
        </>
    )
}

export default Header
