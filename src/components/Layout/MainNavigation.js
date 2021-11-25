import styles from "./MainNavigation.module.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AuthStore } from "../../store/auth-context";
import { useHistory } from "react-router-dom";
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
  exit: {
    x: 500,
    transition: {
      type: "tween",
      duration: 1.5,
    },
  },
};
const MainNavigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthStore);

  const logoutHandler = () => {
    history.replace("/");
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
