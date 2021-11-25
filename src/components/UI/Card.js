import styles from "./Card.module.css";

const Card = (props) => {
  const classNames = `${props.className} ${styles.card}`;
  return <div className={classNames}>{props.children}</div>;
};

export default Card;
