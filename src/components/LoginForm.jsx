import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import circleImg from "../assets/images/Selection.png";
import loginImg from "../assets/images/login_img.png";
export default function LoginForm() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="login_form">
            <div className="login-banner">
                <img src={loginImg} alt="" />
            </div>
            <div className="form">
                <div className="form-title">
                    <h3>Register Your Account</h3>
                </div>
                <div className="form-control">
                    <p> <img src={circleImg} alt="" /> I Represent a Brand</p>
                </div>
                <Link to="/home">
                    <button className="submit_btn">Continue</button>
                </Link>
                {/* <button className="submit_btn" onClick={() => loginWithRedirect()}>Continue</button> */}

                <div>
                    <p>Already a member? <Link to="">Sign In</Link></p>
                </div>
            </div>
        </div >
    )
}
