import React from 'react';
import styles from './FeedPhotosItem.module.css';

function FeedPhotoItem({ photo }) {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotoItem;
