import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

import portfolioDataJson from "../../mock-data/portfolio.json";
import "./index.scss";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const { portfolio } = portfolioDataJson;

  const renderPortfolio = (portfolioData) => {
    return (
      <div className="images-container">
        {portfolioData.map((p, index) => (
          <div className="image-box" key={index}>
            <img src={p.cover} alt="" className="portfolio-image" />
            <div className="content">
              <p className="title">{portfolioData.name}</p>
              <h4 className="description">{portfolioData.description}</h4>
              <button className="btn" onClick={() => window.open(portfolioData.url)}>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArr={["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"]}
              index={15}
            />
          </h1>

          <div>{renderPortfolio(portfolio)}</div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Portfolio;
