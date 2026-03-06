import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <div>
        <div>LOGO</div>
        <div>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">DashBoard</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar
