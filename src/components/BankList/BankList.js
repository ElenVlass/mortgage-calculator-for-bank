import React, { Component } from 'react';
import styles from './BankList.module.scss';
import LoaderSpiner from '../Loader';

class BankList extends Component {
  static defaultProps = {
    onDelete: () => null,
    children: null,
    onEdit: () => null,
  };

  componentDidMount() {
    this.props.fetchBanks();
  }

  onDeleteHandler = (id, _id) => () => {
    const { onDelete } = this.props;
    onDelete(id || _id);
  };

  onEditHandler = (id, _id) => () => {
    const { onEdit } = this.props;
    onEdit(id || _id);
  };

  render() {
    const { list, allysProps, children, isLoading } = this.props;

    return (
      <>
        {isLoading && <LoaderSpiner />}
        <ul className={styles.list}>
          {list.map(bank => {
            if (!bank) return null;
            const {
              id,
              _id,
              name,
              interestRate,
              maximumLoan,
              minimumDownPayment,
              loanTerm,
            } = bank;
            return (
              <li key={`${id || _id}-key`} className={styles.item}>
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
                  onClick={this.onDeleteHandler(id, _id)}
                  {...allysProps}
                >
                  {children}
                  <span className={styles.span}>Edit</span>
                </button>

                <button
                  className={styles.button}
                  type="button"
                  onClick={this.onEditHandler(id, _id)}
                  {...allysProps}
                >
                  {children}
                  <span className={styles.span}>Delete</span>
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default BankList;
