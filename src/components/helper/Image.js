/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import styles from './Image.module.css';

function Image({ alt, src }) {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton} />}
      <img onLoad={handleLoad} className={styles.img} alt={alt} src={src} />
    </div>
  );
}

export default Image;
