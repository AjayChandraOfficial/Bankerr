import Card from "../UI/Card";
import styles from "./Transactions.module.css";
const Transactions = () => {
  return (
    <Card className={styles.card}>
      <h2 className={styles.heading}>No Transactions</h2>
    </Card>
  );
};

export default Transactions;
