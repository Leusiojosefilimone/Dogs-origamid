import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../Hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import { UserContext } from '../../UserContext';

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Name" name="username" type="text" {...username} />
        <Input label="Password" name="password" type="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <p>{error}</p> }
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
}
export default LoginForm;
