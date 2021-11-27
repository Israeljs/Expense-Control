import { ADD_EXPENSE, DELETE_EXPENSE, REQUEST_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencyKeys: [],
  currencies: {},
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payLoad, id: state.expenses.length }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
      // expenses: state.expenses.splice(state.expenses.indexOf(action.id - 1), 1),
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      currencyKeys: action.currencyKeys,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
