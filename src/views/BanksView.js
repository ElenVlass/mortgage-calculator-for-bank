import React from 'react';
import '../styles/base.scss';
import BankList from '../components/BankList';
import BankForm from '../components/BankForm';

const BanksView = () => {
  return (
    <>
      <h2>Add bank</h2>
      <h2>Banks</h2>
      <BankList />
      <BankForm />
    </>
  );
};

export default BanksView;
