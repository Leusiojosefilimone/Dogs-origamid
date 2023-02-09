import React from 'react';
import { useLocation } from 'react-router';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';

function UserHeader() {
  const [title, setTitle] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/estatisticas': setTitle('Estatisticas');
        break;
      case '/conta/postar': setTitle('Postar');
        break;
      default: setTitle('Minha conta');
        break;
    }
  });
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
export default UserHeader;
