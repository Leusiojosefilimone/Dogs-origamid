import React from 'react';
import styles from './FeedPhotos.module.css';
import FeedPhotoItem from './FeedPhotoItem';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../Api';

function FeedPhotos({ setModalPhoto }) {
  const {
    data, loading, request, error,
  } = useFetch();
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else return null;
}

export default FeedPhotos;
