
const Header = ({ currentUser, logOut }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navar-light bg-light">
                <a href="#" className="navbar-brand">Navbar</a>


                {!currentUser ? (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/signup" className="nav-link">Signup</a>
                        </li>

                    </ul>

                ) : (
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a href="/profile" className="nav-link">{currentUser.userName}</a>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>Log Out</a>
                        </li>
                    </ul>


                )}








            </nav >
        </>
    )
}

export default Header
