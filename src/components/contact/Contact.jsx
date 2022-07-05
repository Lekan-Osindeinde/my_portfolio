import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import xing from "../assets/xing.png";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contactme">
      <div className="detail">
        <h1 className="ti">Let us work together</h1>
        <p className="tiCon">
          <HomeIcon /> Umfassungsstrasse 80, 39124, Magdegurg.
        </p>
        <p className="tiCon">
          <EmailIcon /> osindeindeolawale01@gmail.com
        </p>
        <p className="tiCon">
          <PhoneIcon /> +491786515434
        </p>
      </div>

      <div class="social-links">
        <h1>Check me out on</h1>

        <p>
          <a target="_blank" href="https://github.com/Lekan-Osindeinde">
            <GitHubIcon />
          </a>
        </p>
        <p>
          <a target="_blank" href="https://twitter.com/osindeindeLekan">
            <TwitterIcon />
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lekan-osindeinde-0a38a8141/"
          >
            <LinkedInIcon />
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://www.xing.com/profile/LekanOlawale_Osindeinde/cv"
          >
            <img src={xing} className="xing" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
