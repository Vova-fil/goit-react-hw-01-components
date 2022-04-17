import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export function Statistics({ stats }) {
  const getRandom = () => Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className={s.section}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{
              backgroundColor: `#${getRandom}`,
            }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
