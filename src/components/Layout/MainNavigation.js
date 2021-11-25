import styles from "./MainNavigation.module.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AuthStore } from "../../store/auth-context";
const anim_logoVariants = {
  from: { x: -1000 },
  to: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 2,
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
      delay: 2,
    },
  },
  hover: {
    scale: 1.2,
    color: "black",
    transition: {
      type: "spring",
      duration: 0.4,
      mass: 4,
      stiffness: 400,
    },
  },
  exit: {
    x: 400,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

const anim_ButtonLogoutVariants = {
  from: { x: 1000, display: "none" },
  to: {
    display: "block",
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 1.5,
    },
  },
  hover: { scale: 1.2, color: "black" },
  exit: {
    x: 500,
    transition: {
      type: "tween",
      duration: 1.5,
    },
  },
};
const MainNavigation = () => {
  const authCtx = useContext(AuthStore);

  const logoutHandler = () => {
    authCtx.setLoggedOut();
  };
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
      <div className={styles.buttons}>
        <AnimatePresence>
          {!authCtx.isLoggedIn && (
            <motion.button
              variants={anim_ButtonVariants}
              initial="from"
              animate="to"
              exit="exit"
              key="signUpButton"
              whileHover="hover"
              className={styles.button}
            >
              Sign up
            </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {authCtx.isLoggedIn && (
            <motion.button
              variants={anim_ButtonLogoutVariants}
              initial="from"
              animate="to"
              exit="exit"
              key="LogoutButton"
              whileHover="hover"
              className={styles.button}
              onClick={logoutHandler}
            >
              Log Out
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MainNavigation;
