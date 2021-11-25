import { useContext } from "react";
import { AuthStore } from "../../store/auth-context";
import { motion } from "framer-motion";
import Card from "../UI/Card";
import styles from "./AccountPage.module.css";
import TransferAmount from "./TransferAmount";
import LoanRequest from "./LoanRequest";
import Transactions from "./Transactions";
const anim_accountVariants = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const AccountPage = () => {
  const authCtx = useContext(AuthStore);
  return (
    <motion.div
      variants={anim_accountVariants}
      animate="to"
      initial="from"
      exit="exit"
      className={styles.container}
    >
      <Card className={styles["card-welcome"]}>
        <h2>{`Welcome, ${authCtx.userId} 👋`}</h2>
      </Card>
      <TransferAmount />
      <LoanRequest />
      <Transactions />
    </motion.div>
  );
};
export default AccountPage;
