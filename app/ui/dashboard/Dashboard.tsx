import styles from './DashboardSkeleton.module.scss'

const Dashboard = () => {
    return <div className={styles.container}>
      <div className={styles.b1}>Crypto Update</div>
      <div className={styles.b2}>Card</div>
      <div className={styles.b3}>Income</div>
      <div className={styles.b4}>Transaction history</div>
      <div className={styles.b5}>Trading volume</div>
  </div>;
};

export default Dashboard;
