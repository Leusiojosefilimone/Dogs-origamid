import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

function Header() {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container `}>
        <Link to="/" aria-label="dogs - home" className={styles.logo}><Dogs /></Link>

        {data
          ? (
            <Link to="/conta" className={styles.login}>
              {data.nome}
              <button onClick={userLogout}>sair</button>
            </Link>
          )
          : (<Link to="/login" className={styles.login}> Login / Criar</Link>)}
      </nav>
    </header>
  );
}

export default Header;
