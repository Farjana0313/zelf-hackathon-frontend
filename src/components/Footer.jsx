import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-menu">
        <Link to="">Terms of Service</Link>
        <Link to="">Privacy Policy</Link>
        <Link to="">DMCA</Link>
      </div>
      <div className="footer-content">
        <div>
          <p>© All rights reserved by Zelf. 2022</p>
        </div>
      </div>
    </footer>
  )
}
