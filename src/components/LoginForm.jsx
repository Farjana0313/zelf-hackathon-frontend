import { Link } from "react-router-dom"
import loginImg from "../assets/images/login_img.png"
export default function LoginForm() {
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
                    <input type="radio" id="brand" />
                    <label htmlFor="brand">I Represent a Brand</label>
                </div>
                <div className="submit_btn">
                    <Link to="">Continue</Link>
                </div>
                <div>
                    <p>Already a member? <Link to="">Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}
