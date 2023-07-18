import React, { useState } from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Portfolio = () => {
  const HoverData = [
    "Weather App built using pure vanilla js",
    "Linked In App based on React, Redux and Firebase",
    "Image Search App using Pixabay API",
  ];

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>With React experience</p>
          </div>
          <a href="https://github.com/Rwespradeep">
            <span className="secondaryText">Explore more works</span>
          </a>
        </div>

        {/* Images for our portfolio */}

        <div className={`flexCenter ${css.showcase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            whileHover={{ scale: 1.05, transition: { duration: 1 } }}
            src="./WeatherApp.jpg"
            alt="Weatherapp project"
            onClick={() => {
              window.location.href =
                "https://melodious-lolly-b4f7d5.netlify.app/";
            }}
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            whileHover={{ scale: 1.05, transition: { duration: 1 } }}
            src="./LinkedIN2.jpg"
            alt="LinkedIN project"
            onClick={() => {
              window.location.href =
                "https://profound-cajeta-60af0b.netlify.app/";
            }}
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            whileHover={{ scale: 1.05, transition: { duration: 1 } }}
            src="./ImageSearch.jpg"
            alt="Image search engine project"
            onClick={() => {
              window.location.href =
                "https://roaring-churros-de0a12.netlify.app/";
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
