import { createAction } from '@reduxjs/toolkit';

export const addBankRequest = createAction('bank/addRequest');
export const addBankSuccess = createAction('bank/addSuccess');
export const addBankError = createAction('bank/addErorr');

export const deleteBankRequest = createAction('bank/deleteRequest');
export const deleteBankSuccess = createAction('bank/deleteSuccess');
export const deleteBankError = createAction('bank/deleteError');

export const updateBankRequest = createAction('bank/updateRequest');
export const updateBankSuccess = createAction('bank/updateSuccess');
export const updateBankError = createAction('bank/updateError');

export const fetchBanksRequest = createAction('banks/fetchRequest');
export const fetchBanksSuccess = createAction('banks/fetchSuccess');
export const fetchBanksError = createAction('banks/fetchError');
