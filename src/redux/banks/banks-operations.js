import axios from 'axios';

import {
  addBankRequest,
  addBankSuccess,
  addBankError,
  deleteBankRequest,
  deleteBankSuccess,
  deleteBankError,
  fetchBanksRequest,
  fetchBanksSuccess,
  fetchBanksError,
  updateBankRequest,
  updateBankSuccess,
  updateBankError,
} from './banks-actions';

const BASE_URL = 'https://mortgage-calculator-project.herokuapp.com/api';
// const BASE_URL = 'http://localhost:4000/api/'

const addBank = newBank => dispatch => {
  const bank = {
    name: newBank.name,
    interestRate: newBank.interestRate,
    maximumLoan: newBank.maximumLoan,
    minimumDownPayment: newBank.minimumDownPayment,
    loanTerm: newBank.loanTerm,
  };

  dispatch(addBankRequest());

  axios
    .post(`${BASE_URL}/banks`, bank)
    .then(({ data }) => dispatch(addBankSuccess(data)))
    .catch(erorr => dispatch(addBankError(erorr)));
};

const deleteBank = bankId => dispatch => {
  dispatch(deleteBankRequest());

  axios
    .delete(`${BASE_URL}/banks/${bankId}`)
    .then(() => dispatch(deleteBankSuccess(bankId)))
    .catch(error => dispatch(deleteBankError(error)));
};

const updateBank =
  ({ bankId, updatedBank }) =>
  dispatch => {
    const update = {
      name: updatedBank.name,
      interestRate: updatedBank.interestRate,
      maximumLoan: updatedBank.maximumLoan,
      minimumDownPayment: updatedBank.minimumDownPayment,
      loanTerm: updatedBank.loanTerm,
    };

    dispatch(updateBankRequest());

    axios
      .put(`${BASE_URL}/banks/${bankId}`, update)
      .then(({ data }) => dispatch(updateBankSuccess(data)))
      .catch(erorr => dispatch(updateBankError(erorr)));
  };

const fetchBanks = () => async dispatch => {
  dispatch(fetchBanksRequest());

  try {
    const response = await axios.get(`${BASE_URL}/banks`);
    dispatch(fetchBanksSuccess(response.data.banks));
  } catch (error) {
    dispatch(fetchBanksError(error));
  }
};
export default {
  addBank,
  deleteBank,
  updateBank,
  fetchBanks,
};
