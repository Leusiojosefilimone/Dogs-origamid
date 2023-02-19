import React from 'react';
import styles from './FeedPhotos.module.css';
import FeedPhotoItem from './FeedPhotoItem';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../Api';
import NoPhoto from '../helper/NoPhoto';

function FeedPhotos({
  page, user, setModalPhoto, setInfinite,
}) {
  const {
    data, loading, request, error,
  } = useFetch();
  React.useEffect(() => {
    // eslint-disable-next-line consistent-return
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data && data.length === 0) return <NoPhoto />;
  if (data) {
    console.log(data);
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
