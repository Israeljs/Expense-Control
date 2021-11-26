import React from 'react';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpense />
        <WalletTable />
      </div>
    );
  }
}

export default Wallet;
