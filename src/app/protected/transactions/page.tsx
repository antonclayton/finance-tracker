import React from "react";
import Header from "../../../components/general/Header/Header";
import { AddTransaction, ImportFromCSV, RunningTotal, TransactionList } from "./components";
import styles from './TransactionsPage.module.css'

const Transactions = () => {
  return <div className={styles.container}>
    <Header title="Transactions" />

    {/*Add Transaction and Import from CSV */}
    <div className={styles.actionsRow}>
      <AddTransaction />
      <ImportFromCSV />
    </div>

    {/*Transaction List and Running Total */}
    <div className={styles.contentGrid}>
      <TransactionList />
      <RunningTotal />
    </div>

  </div>;
};

export default Transactions;
