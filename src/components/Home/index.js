import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Logo from "./Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["r", "u", "n", "g"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={logo} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={jobArray}
              index={19}
            />
          </h1>
          <h2>Frontend Devloper / Javascript Lover</h2>
          <Link to="/contact" className="flat-btn">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="cube-transition" />
    </>
  );
};

export default Home;
