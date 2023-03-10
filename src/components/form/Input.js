import React from 'react';
import styles from './Input.module.css';

function Input({
  label, type, name, value, onChange, Error, onBlur,
}) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
      />
      <p className={styles.error}>{Error}</p>
    </div>

  );
}

export default Input;
