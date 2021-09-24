import { configureStore } from '@reduxjs/toolkit';
import { bankReducer } from './banks';

export const store = configureStore({
  reducer: bankReducer,
  devTools: process.env.NODE_ENV === 'development',
});
