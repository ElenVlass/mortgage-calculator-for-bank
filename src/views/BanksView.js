import React from 'react';
import '../styles/base.scss';
import BankList from '../components/BankList';

const BanksView = () => {
  return (
    <>
      <h2>Add bank</h2>
      <h2>Banks</h2>
      <BankList />
    </>
  );
};

export default BanksView;
