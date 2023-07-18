import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import css from "./Expertise.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
const Expertise = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 0.5)}
                className={css.exp}
                key={i}
              >
                <div className="flexCenter" style={{ background: exp.bg }}>
                  <exp.icon size={25} color="white" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  {exp.name == "Web Development(Angular)" ||
                  exp.name == "Automation Testing" ? (
                    <span className="secondaryText">
                      {exp.projects} Project
                    </span>
                  ) : (
                    <span className="secondaryText">
                      {exp.projects} Projects
                    </span>
                  )}
                  {/* <span className="secondaryText">{exp.projects} Project</span> */}
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">How can I help?</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span className="secondaryText" key={i}>
                {paragraph}
              </span>
            );
          })}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">5+</span>
              <span className="secondaryText">Personal projects</span>
            </div>

            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">5+</span>
              <span className="secondaryText">Appreciations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
