import React from 'react';
import { useParams } from 'react-router';
import { PHOTO_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Error from '../helper/Error';
import Head from '../helper/Head';
import Loading from '../helper/Loading';
import styles from './Photo.module.css';
import PhotoContent from './PhotoContent';

function Photo() {
  const single = true;
  const { id } = useParams();
  const {
    data, loading, error, request,
  } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error erro={error} />;
  if (loading) return <Loading />;
  if (data) return (
    <section className="container mainContainer">
      <Head
        title={data.photo.title}
      />
      <PhotoContent single={single} data={data} />
    </section>
  );
}

export default Photo;
