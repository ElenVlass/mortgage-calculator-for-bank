import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './banks-actions';

const {
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
} = actions;

const initialState = [
  {
    name: 'Bank1',
    interestRate: 50000,
    maximumLoan: 2000,
    minimumDownPayment: 0.2,
    loanTerm: 10,
    id: 1,
  },
  {
    name: 'Bank2',
    interestRate: 40000,
    maximumLoan: 1500,
    minimumDownPayment: 0.3,
    loanTerm: 9,
    id: 2,
  },
];

const banks = createReducer(initialState, {
  [addBankSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteBankSuccess]: (state, { payload }) => {
    debugger;
    return state.filter(bank => bank._id !== payload && bank.id !== payload);
  },
  [updateBankSuccess]: (state, { payload }) =>
    state.map(bank => (bank.id === payload.id ? payload : bank)),
  [fetchBanksSuccess.type]: (_, { payload }) => {
    return payload;
  },
});

const loading = createReducer(false, {
  [addBankRequest]: () => true,
  [addBankSuccess]: () => false,
  [addBankError]: () => false,
  [deleteBankRequest]: () => true,
  [deleteBankSuccess]: () => false,
  [deleteBankError]: () => false,
  [updateBankRequest]: () => true,
  [updateBankSuccess]: () => false,
  [updateBankError]: () => false,
  [fetchBanksRequest]: () => true,
  [fetchBanksSuccess]: () => false,
  [fetchBanksError]: () => false,
});

const error = createReducer(null, {
  [addBankError]: (_, { payload }) => console.log(payload),
  [deleteBankError]: (_, { payload }) => console.log(payload),
  [updateBankError]: (_, { payload }) => console.log(payload),
  [fetchBanksError]: (_, { payload }) => console.log(payload),
});

export default combineReducers({ banks, loading, error });
