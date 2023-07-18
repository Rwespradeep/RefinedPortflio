import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Pradeep Rvs</div>

        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            {/* <a href="">Expertise</a> */}
            <Link to="expertise">Expertise</Link>
          </li>
          <li>
            {/* <a href="">Works</a> */}
            <Link to="works">Works</Link>
          </li>
          <li>
            <a href="https://github.com/Rwespradeep" target="blank">
              Portfolio
            </a>
            {/* <Link to="portfolio">Portfolio</Link> */}
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>9573525989</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* This below button is for medium and small screens like mobiles */}
        <div
          className={css.menuIcon}
          onClick={() => setmenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
