// import { createSelector } from '@reduxjs/toolkit';

const getIsLoading = state => state.loading;

const getAllBanks = state => state.banks;

export default {
  getIsLoading,
  getAllBanks,
};
