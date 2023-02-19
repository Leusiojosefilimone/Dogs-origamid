import React from 'react';
import { PASSWORD_LOST } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import Error from '../helper/Error';
import Head from '../helper/Head';

function LoginPasswordLost() {
  const login = useForm();
  const {
    data, error, loading, request,
  } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate) {
      const { url, options } = PASSWORD_LOST({ login: login.value, url: window.location.href.replace('perdeu', 'resetar') });
      const { json } = await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Recuperar senha" />
      <h1 className="title">Perdeu a senha</h1>
      {data ? <p style={{ color: '#4c1' }}>{data}</p> : (
        <from onSubmit={handleSubmit}>
          <Input type="text" label="Email / Usuário" name="email" {...login} />
          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        </from>
      )}

      <Error erro={error} />
    </section>
  );
}

export default LoginPasswordLost;
