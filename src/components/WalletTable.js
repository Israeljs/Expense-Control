import React from 'react';
// import { connect } from 'react-redux';

class WalletTable extends React.Component {
  render() {
    return (
      <table className="Table">
        <thead>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
        </thead>
      </table>
    );
  }
}

export default WalletTable;
