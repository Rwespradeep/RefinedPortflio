import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings bg-primary ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's start building something <br /> amazing together
          </span>
          <span className="primaryText">
            Start by <a href="mailto:pradeeprvs@outlook.com">saying hi</a>
          </span>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Vishakapatnam, INDIA</p>
          </div>

          <div className={css.menu}>
            <li>Web services</li>
            <li>Photography services</li>
            <li>or You can totally hire me:)</li>
            <li
              onClick={() => (location.href = "https://github.com/Rwespradeep")}
            >
              Follow my Github for latest works
            </li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
