import styles from "./MainNavigation.module.css";
import { motion } from "framer-motion";
const anim_logoVariants = {
  from: { x: -1000 },
  to: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 2.5,
    },
  },
};
const anim_ButtonVariants = {
  from: { x: 1000 },
  to: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 2.5,
    },
  },
};
const MainNavigation = () => {
  return (
    <nav>
      <motion.h1
        variants={anim_logoVariants}
        initial="from"
        animate="to"
        className={styles.heading}
      >
        Bankerr.
      </motion.h1>
      <motion.button
        variants={anim_ButtonVariants}
        initial="from"
        animate="to"
        className={styles.button}
      >
        Sign up
      </motion.button>
    </nav>
  );
};

export default MainNavigation;
