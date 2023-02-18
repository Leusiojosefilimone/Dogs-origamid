import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserPhotoPost.module.css';
import { PHOTO_POST } from '../../Api';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../form/Input';
import Button from '../form/Button';
import Error from '../helper/Error';
import Head from '../helper/Head';

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const {
    data, error, loading, request,
  } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('./conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', nome.value);
    formData.append('idade', nome.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST();
    request(url, options);
  }
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
        { loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button> }
        <Error error={error} />
      </form>
      {img.preview && <div className={styles.preview} style={{ backgroundImage: `url('${img.preview}')` }} />}
    </section>
  );
}
export default UserPhotoPost;
