import Card from "../UI/Card";
import styles from "./TransferAmount.module.css";
import { motion } from "framer-motion";
const TransferAmount = () => {
  return (
    <Card className={styles.card}>
      <h2 className={styles.transferhead}>Transfer Amount</h2>
      <form className={styles.form}>
        <label htmlFor="username">Username</label>
        <input id="username" text />

        <label htmlFor="amount">Amount</label>
        <input id="amount" number />
        <motion.button
          className={styles.button}
          whileHover={{ scale: 1.2, backgroundColor: "rgb(204, 204, 204)" }}
        >
          Send
        </motion.button>
      </form>
    </Card>
  );
};

export default TransferAmount;
