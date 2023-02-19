import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NoPhoto.module.css';

function NoPhoto() {
  return (
    <div className={styles.noPhoto}>
      <h4>No momento não tem fotografias</h4>
      <Link className={styles.postar} to="/conta/postar">Adicionar foto</Link>
    </div>
  );
}

export default NoPhoto;
