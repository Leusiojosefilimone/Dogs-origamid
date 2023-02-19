import React from 'react';
import { STATS_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Loading from '../helper/Loading';
import Head from '../helper/Head';
import Error from '../helper/Error';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

function UserStats() {
  const data = [
    { title: 'peixe', acessos: '12' },
    { title: 'robin', acessos: '21' },
    { title: 'cat', acessos: '27' },
  ];
  const {
    error, loading, request,
  } = useFetch();
  React.useEffect(() => {
    async function getdata() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getdata();
  }, [request]);
  if (loading) return <Loading />;
  if (error) return <Error erro={error} />;
  if (data) {
    return (
      <React.Suspense fallback={<div />}>
        <Head
          title="Estatisticas"
          description="Estatistias do usuario"
        />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else return null;
}

export default UserStats;
