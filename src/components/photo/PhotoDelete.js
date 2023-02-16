import React from 'react';
import { PHOTO_DELETE } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

function PhotoDelete({ id }) {
  const { loading, request } = useFetch();

  async function handleClick() {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm('Tem crteza que pretende Eliminar');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <button
          type="button"
          className={styles.delete}
          disabled
        >
          Eliminar
        </button>
      ) : (
        <button
          type="button"
          className={styles.delete}
          onClick={handleClick}
        >
          Eliminar
        </button>
      )}

    </>
  );
}

export default PhotoDelete;
