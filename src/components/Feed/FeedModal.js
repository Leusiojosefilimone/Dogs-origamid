import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import Loading from '../helper/Loading';
import { PHOTO_GET } from '../../Api';
import Error from '../helper/Error';
import PhotoContent from '../photo/PhotoContent';

function FeedModal({ photo, setModalPhoto }) {
  const {
    data, error, loading, request,
  } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={styles.modal}
      onClick={handleOutsideClick}
    >
      {error && <Error erro={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;
