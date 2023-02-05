import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../Hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import { UserContext } from '../../UserContext';

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userlogin } = useContext(UserContext);
  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userlogin(username.value, password.value);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Name" name="username" type="text" {...username} />
        <Input label="Password" name="password" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
}
export default LoginForm;
