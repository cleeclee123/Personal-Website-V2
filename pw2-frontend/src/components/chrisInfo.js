import React, { Component } from "react";
import resumeIcon from "../assets/resume-icon-pw2-removebg.png";
import linkedinIcon from "../assets/linkedin0icon-pw2.png";
import emailIcon from "../assets/email-icon-pw2-removebg.png";
import githubIcon from "../assets/github-icon-pw2-blue.png";

export default class chrisInfo extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="name"> CHRISTOPHER LEE </h1>
        <h2 className="sub-name">
          {" "}
          INDUSTRIAL ENGINEERING & COMPUTER SCIENCE @ UIUC{" "}
        </h2>

        <div className="icon-container">
          <div className="resume-icon-wrapper">
            {" "}
            <a href="https://drive.google.com/file/d/1rTHl7uEQ5_2tRJKnbScF-7aKvDDJ1O89/view?usp=sharing">
              <img className="resume-icon" src={resumeIcon} />{" "}
            </a>
          </div>
          <div className="linkedin-icon-wrapper">
            {" "}
            <a href="https://www.linkedin.com/in/christopher-lee-4311241a6/">
              <img className="linkedin-icon" src={linkedinIcon} />{" "}
            </a>
          </div>
          <div className="email-icon-wrapper">
            {" "}
            <a href="mailto:cl114@illinois.edu">
              <img className="email-icon" src={emailIcon} />{" "}
            </a>
          </div>
          <div className="github-icon-wrapper">
            {" "}
            <a href="https://github.com/cleeclee123">
              <img className="github-icon" src={githubIcon} />{" "}
            </a>
          </div>
        </div>

        

      </div>
    );
  }
}
