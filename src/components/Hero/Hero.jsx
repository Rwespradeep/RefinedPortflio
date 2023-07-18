import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* Upper elements */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hello There, <br /> I'm Pradeep.
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="secondaryText"
          >
            I create webpages,
            <br />
            And I shoot moments..
          </motion.span>
        </div>

        {/* I am putting hero image here.. */}

        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./moi.png"
            alt=""
          />
        </motion.div>

        {/* will keep my email below.. */}
        <a className={css.email} href="mailto:pradeeprvs@outlook.com">
          pradeeprvs@outlook.com
        </a>

        {/* lower elements */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="primaryText"
            >
              2
            </motion.div>
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="secondaryText"
            >
              <div>Years of</div>
              <div>Experience</div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>Proffesional Photographer &&</span>
            <span>A Front End Engineer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
