import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.statTable}>
        {stats.map(({ id, label, percentage }) => (
          <div key={id} className={styles.statRow}>
            <div className={styles.label}>{label}</div>
            <div className={styles.percentage}>{percentage}%</div>
          </div>
        ))}
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string, 
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired, 
};

export default Statistics;