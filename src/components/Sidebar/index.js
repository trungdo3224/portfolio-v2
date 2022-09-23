import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import logo from "../../assets/images/logo.png";
import logoSub from "../../assets/images/logo-sub.png";
import { FaHome, FaUser, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
        <img className="sub-logo" src={logoSub} alt="" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FaHome color="4d4d4e" size={24} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FaUser color="4d4d4e" size={24} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FaEnvelope color="4d4d4e" size={24} />
        </NavLink>
      </nav>
      <ul>
        <li >
          <a href="https://www.linkedin.com/in/trung-do-946aa7244/" rel="noreferrer" target="_blank">
            <FaLinkedin className="anchor-icon" size={24}/>
          </a>
        </li>

        <li>
          <a href="https://github.com/trungdo3224" rel="noreferrer" target="_blank">
            <FaGithub className="anchor-icon" size={24}/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
