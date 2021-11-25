import styles from "./LoginBackground.module.css";

const LoginBackground = (props) => {
  return <div className={styles["login-background"]}>{props.children}</div>;
};

export default LoginBackground;
