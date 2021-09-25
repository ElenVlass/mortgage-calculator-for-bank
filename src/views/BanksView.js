import React from 'react';
import '../styles/base.scss';
import BankList from '../components/BankList';
import BankForm from '../components/BankForm';

const BanksView = () => {
  return (
    <>
      <BankList />
      <BankForm />
    </>
  );
};

export default BanksView;
