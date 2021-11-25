import Card from "../UI/Card";
import styles from "./LoanRequest.module.css";
const LoanRequest = () => {
  return (
    <Card className={styles.card}>
      <h2>
        Balance: <span className={styles.amount}>20456</span>
      </h2>
    </Card>
  );
};

export default LoanRequest;
