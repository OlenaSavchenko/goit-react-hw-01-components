import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

const TransactionItem = ({ item }) => {
  const { type, amount, currency } = item;
  return (
    <tr className={styles.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  item: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionItem;
