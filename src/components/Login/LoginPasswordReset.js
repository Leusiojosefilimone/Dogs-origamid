import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import Error from '../helper/Error';

function LoginPasswordReset() {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key)setKey(key);
    if (login)setLogin(key);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok)navigate('/login');
    }
  }
  return (
    <div>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" {...password} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Error erro={error} />
    </div>
  );
}

export default LoginPasswordReset;
