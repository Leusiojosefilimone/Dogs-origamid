import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../helper/Head';

function UserProfile() {
  const { user } = useParams();

  return (
    <div className="container mainSection">
      <Head
        title={user}
        description="Perfil do usuario"
      />
      ;
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </div>
  );
}

export default UserProfile;
