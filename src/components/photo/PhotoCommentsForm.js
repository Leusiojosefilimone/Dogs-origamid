import React from 'react';
import styles from './PhotoCommentsForm.module.css';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import Error from '../helper/Error';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../Api';

function PhotoCommentsForm({ id, setComments, single }) {
  const { request, error, data } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comment) => [...comment, json]);
    }
  }

  return (
    <form className={`${styles.form} ${single && styles.single}`} onSubmit={handleSubmit}>
      <textarea
        name="comment"
        id="comment"
        value={comment}
        placeholder="Commente"
        className={styles.textarea}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button} type="submit">
        {' '}
        <Enviar />
        {' '}
      </button>
      {error && <Error erro={error} />}
    </form>
  );
}

export default PhotoCommentsForm;
