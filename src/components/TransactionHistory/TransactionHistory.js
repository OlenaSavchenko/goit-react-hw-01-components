// Модули
import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
// Стили
import styles from './TransactionHistory.module.css';

const Transactions = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr className={styles.tableTitle}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, ...item }) => (
        <TransactionItem key={id} item={item} />
      ))}
    </tbody>
  </table>
);

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Transactions;
