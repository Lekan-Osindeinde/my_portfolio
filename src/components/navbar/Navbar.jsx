import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <p>
          <PhoneIcon />
          +491786515434
        </p>
        <p>
          <EmailIcon />
          osindeindeolawale01@gmail
        </p>
      </div>
      <div className="list">
        <ul className="listItem">
          <a href="#aboutme" rel="noreferrer" text-decoration="none">
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
