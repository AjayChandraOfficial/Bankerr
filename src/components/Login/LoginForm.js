import styles from "./LoginForm.module.css";
import Card from "../UI/Card";
import LoginButton from "../Assets/LoginButton";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AuthStore } from "../../store/auth-context";
import { useHistory } from "react-router";
const anim_cardVariants = {
  from: { y: -1000 },
  to: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
const anim_headerVariants = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    transition: { type: "spring", duration: 0.8 },
  },
};

const anim_buttonVariants = {
  hover: {
    scale: 1.1,
  },
};
let username;
const LoginForm = () => {
  const history = useHistory();
  const [userValidEntered, setUserValidEntered] = useState(false);
  const [passwordValidEntered, setPasswordValidEntered] = useState(false);
  const authCtx = useContext(AuthStore);

  const onUsernameChange = (e) => {
    const enteredUsername = e.target.value;
    username = enteredUsername;
    if (enteredUsername.trim().length >= 4) setUserValidEntered(true);
    else setUserValidEntered(false);
  };

  const onPasswordChange = (e) => {
    const enteredPassword = e.target.value;

    if (enteredPassword.trim().length >= 4) setPasswordValidEntered(true);
    else setPasswordValidEntered(false);
  };
  const formIsValid = userValidEntered && passwordValidEntered;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      authCtx.setLoggedIn();
      authCtx.setUserId(username);
      history.push(`/${username}`);
    }
  };
  return (
    <motion.div
      variants={anim_cardVariants}
      animate="to"
      initial="from"
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <Card className={styles.card} key="card">
        <motion.h2 variants={anim_headerVariants}>Login</motion.h2>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <motion.label variants={anim_headerVariants} htmlFor="username">
            Username
          </motion.label>
          <motion.input
            id="username"
            type="text"
            variants={anim_headerVariants}
            onChange={onUsernameChange}
          />

          <motion.label htmlFor="password" variants={anim_headerVariants}>
            Password
          </motion.label>

          <motion.input
            id="password"
            type="password"
            variants={anim_headerVariants}
            onChange={onPasswordChange}
          />
          <AnimatePresence>
            {formIsValid && (
              <motion.button
                type="submit"
                className={styles.button}
                variants={anim_buttonVariants}
                whileHover="hover"
              >
                <LoginButton key="button" />
              </motion.button>
            )}
          </AnimatePresence>
        </form>
      </Card>
    </motion.div>
  );
};

export default LoginForm;
