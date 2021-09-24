import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BankList.module.scss';
import LoaderSpiner from '../Loader';
import { bankSelectors, bankOperations } from '../../redux/banks';

export default function BankList({ children, ...allysProps }) {
  const dispatch = useDispatch();

  const onDelete = id => dispatch(bankOperations.deleteBank(id));
  const list = useSelector(bankSelectors.getAllBanks);
  const isLoading = useSelector(bankSelectors.getIsLoading);

  const onFetchBanks = useCallback(
    () => dispatch(bankOperations.fetchBanks()),
    [dispatch],
  );
  useEffect(() => onFetchBanks(), [onFetchBanks]);

  return (
    <>
      {isLoading && <LoaderSpiner />}
      <ul className={styles.list}>
        {list.map(
          ({
            id,
            name,
            interestRate,
            maximumLoan,
            minimumDownPayment,
            loanTerm,
          }) => (
            <li key={id} className={styles.item}>
              <div>
                <span className={styles.name}>{name}</span>
                <span className={styles.name}>{interestRate}</span>
                <span className={styles.name}>{interestRate}</span>
                <span className={styles.name}>{maximumLoan}</span>
                <span className={styles.name}>{minimumDownPayment}</span>
                <span className={styles.name}>{loanTerm}</span>
              </div>

              <button
                className={styles.button}
                type="button"
                onClick={() => onDelete(id)}
                {...allysProps}
              >
                {children}
                <span className={styles.span}>Delete</span>
              </button>
            </li>
          ),
        )}
      </ul>
    </>
  );
}

// BankList.propTypes = {
//   'aria-label': PropTypes.string.isRequired,
// };
