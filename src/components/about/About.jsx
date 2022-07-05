import image from "../assets/lekan.jpg";
import resume from "../assets/resume.pdf";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="aboutme">
      <div className="left">
        <h1 className="h1title">About me</h1>
        <img src={image} alt="about me" className="profile_pic" />
      </div>
      <div className="right">
        <h4 className="subtit">
          Web developer, structural engineer, visionary and an enterpreneur
        </h4>
        <hr />
        <p className="paraText">
          I am enthusiastic about web applications, and I like to develop apps
          that are both dynamic and responsive.
          <br />
          <p className="paraText">
            I am interested in being a part of a team where I can contribute and
            also develop my skills further. I love new challenges, and I believe
            that my abilities to overcome them will help me develop better
            problem solving skills.
          </p>
        </p>
        <hr />
        <h2>Skill Set</h2>
        <p className="paraText">
          I'm a frontend developer with focus in React, HTML, CSS, and
          JavaScript
        </p>
        <br />
        <a href={resume} target="_blank" download>
          Download Resume
        </a>
        <div id="skills">
          <ul>
            <li>React</li>
            <li>Next</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
          <ul>
            <li>HTML/CSS/SCSS</li>
            <li>Bootstrap</li>
            <li>MongoDB/Mongoose</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
