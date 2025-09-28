import React from "react";
import Header from "../../../components/general/Header/Header";
import { AddTransaction, ImportFromCSV, RunningTotal, TransactionList } from "./components";

const Transactions = () => {
  return <div>
    <Header title="Transactions" />

    {/*Add Transaction and Import from CSV */}
    <div>
      <AddTransaction />
      <ImportFromCSV />
    </div>

    {/*Transaction List and Running Total */}
    <div>
      <TransactionList />
      <RunningTotal />
    </div>

  </div>;
};

export default Transactions;
