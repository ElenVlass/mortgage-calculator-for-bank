import React, { Component } from 'react';
import styles from './BankList.module.scss';
import LoaderSpiner from '../Loader';

class BankList extends Component {
  static defaultProps = {
    onDelete: () => null,
    children: null,
  };

  componentDidMount() {
    this.props.fetchBanks();
  }

  render() {
    const { list, onDelete, allysProps, children, isLoading } = this.props;

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
}

export default BankList;
