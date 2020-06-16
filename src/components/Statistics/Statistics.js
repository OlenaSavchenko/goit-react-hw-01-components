// Модули
import React from 'react';
import PropTypes from 'prop-types';
// Стили
import styles from './Statistic.module.css';

const random = () => Math.floor(Math.random() * 256);

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          style={{
            backgroundColor: `rgba( ${random()} , ${random()} , ${random()}`,
          }}
          className={styles.item}
          key={id}
        >
          <span className={styles.label}>{label} </span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Statistics;
