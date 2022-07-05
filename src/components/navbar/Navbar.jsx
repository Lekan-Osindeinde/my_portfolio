import { ReactComponent as Logo } from "../logo/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="titleContact">
        <Logo />
      </div>
      <div className="list">
        <ul className="listItem">
          <a href="#aboutme">
            <li className="li">About me</li>
          </a>
          <a href="#myproject">
            <li className="li">My Projects</li>
          </a>
          <a href="#contactme">
            <li className="li">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
