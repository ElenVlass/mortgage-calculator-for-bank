import React, { useState } from 'react';
import styles from './BankForm.module.scss';
import { bankOperations, bankSelectors } from '../../redux/banks';
import { useSelector, useDispatch } from 'react-redux';

function BankForm({ children, ...allyProps }) {
  const [name, setName] = useState('');
  const [interestRate, setInterestRate] = useState(0);
  const [maximumLoan, setMaximumLoan] = useState(0);
  const [minimumDownPayment, setMinimumDownPayment] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  const allBanks = useSelector(bankSelectors.getAllBanks);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'interestRate':
        setInterestRate(Number(value));
        break;

      case 'maximumLoan':
        setMaximumLoan(Number(value));
        break;

      case 'minimumDownPayment':
        setMinimumDownPayment(Number(value));
        break;

      case 'loanTerm':
        setLoanTerm(Number(value));
        break;

      default:
        console.log(`The ${name} of input form is incorrect`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    isBankExist()
      ? alert('This bank already exist')
      : dispatch(
          bankOperations.addBank({
            name,
            interestRate,
            maximumLoan,
            minimumDownPayment,
            loanTerm,
          }),
        );

    resetFormField();
  };

  const resetFormField = () => {
    setName('');
    setInterestRate(0);
    setMaximumLoan(0);
    setMinimumDownPayment(0);
    setLoanTerm(0);
  };

  const isBankExist = () => {
    return allBanks.find(bank => bank.name === name);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        Interest Name
        <input
          className={styles.input}
          name="interestRate"
          value={interestRate}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Maximum Loan
        <input
          className={styles.input}
          name="maximumLoan"
          value={maximumLoan}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Minimum Down Payment
        <input
          className={styles.input}
          name="minimumDownPayment"
          value={minimumDownPayment}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Loan Term
        <input
          className={styles.input}
          name="loanTerm"
          value={loanTerm}
          onChange={handleChange}
          required
        />
      </label>
      <button className={styles.button} type="submit" {...allyProps}>
        {children}
        <span className={styles.span}>Add bank</span>
      </button>
    </form>
  );
}

export default BankForm;
