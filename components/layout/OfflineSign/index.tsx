import styles from "./styles.module.css";

export const OfflineSign = () => {
  return (
    <div className={styles.container}>
      <h2>Connection Error</h2>
      <h3>There is not connection to internet to see page searched</h3>
    </div>
  );
};
