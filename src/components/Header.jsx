import { Link, useLocation } from "react-router-dom";
import homeImg from "../assets/images/home_logo.png";
import loginLogo from "../assets/images/login_logo.png";

export default function Header() {
  const location = useLocation();
  const logo = location.pathname === "/" ? loginLogo : homeImg
  return (
    <>
      <header className="header">
        <div className="header_logo">
          <Link to="/">
            <img src={logo} alt="" /></Link>
        </div>
        <div className="header_nav">
          <button className="sign_in_btn">Sign In</button>
          <Link to='/home'>
            <button className="join_btn">Join</button>
          </Link>
        </div>
      </header>
    </>
  )
}
