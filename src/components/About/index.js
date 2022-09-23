import { useEffect, useState } from "react";
import {
  faNodeJs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import { Link } from "react-router-dom";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={["A", "b", "o", "u", "t", " ", "m", "e"]}
              index={15}
            />
          </h1>
          <p>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive.
          </p>
          <p>
            {" "}
            I am now spending my time building projects with React JS, Firebase,
            and learning new technologies.
          </p>
          <p>
            I love creating and building applications that help people in
            everyday life. I love how all the small things work together to make
            something great happens, and have no doubt, my responsibility is to
            create applications that not only profit the organization but also
            contribute to the society in a positive way.
          </p>
        </div>
        <div className="stage-cube-cont">
          <Link to="/skills">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default About;
