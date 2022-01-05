import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class WalletTable extends React.Component {
  headerTable() {
    return (
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
    );
  }

  bodyTable() {
    const { expenses, expenseDelete } = this.props;
    return (
      <tbody>
        { expenses.map(({
          id, description, tag, method, value, exchangeRates, currency,
        }) => (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ value }</td>
            <td>{ (exchangeRates[currency].name).split('/')[0] }</td>
            <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
            <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
            <td>Real</td>
            <td className="Button-container">
              <button
                className="Button-update"
                type="button"
                data-testid="edit-btn"
                // onClick={ () => expenseDelete(id) }
              >
                Editar despesa
              </button>
              <button
                className="Button-delete"
                type="button"
                data-testid="delete-btn"
                onClick={ () => expenseDelete(id) }
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <table>
        { this.headerTable() }
        { this.bodyTable() }
      </table>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenseDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenseDelete: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
