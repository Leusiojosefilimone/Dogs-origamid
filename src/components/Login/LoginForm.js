import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import stylesBtn from '../form/Button.module.css';
import useForm from '../../Hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import { UserContext } from '../../UserContext';
import Error from '../helper/Error';
import Head from '../helper/Head';

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
    <div className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Name" name="username" type="text" {...username} />
        <Input label="Password" name="password" type="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        <Error erro={error} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>Perdeu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadatre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
      </div>
    </div>
  );
}
export default LoginForm;
