import getCurrency from '../services/awesomeapi';

export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const saveLoginInfo = (payLoad) => ({
  type: SAVE_LOGIN_INFO,
  payLoad,
});

export const addExpense = (payLoad) => ({
  type: ADD_EXPENSE,
  payLoad,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const saveCurrencies = (currencies, currencyKeys) => ({
  type: REQUEST_CURRENCIES,
  currencies,
  currencyKeys,
});

export const requestApiCurrenciesThunk = () => async (dispatch) => {
  const currencies = await getCurrency();
  const currencyKeys = Object.keys(currencies);

  dispatch(saveCurrencies(currencies, currencyKeys));
};
