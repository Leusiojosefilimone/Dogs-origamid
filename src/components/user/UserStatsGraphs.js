import React from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import styles from './UserStatsGraphs.module.css';

function UserStatsGraphs({ data }) {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const granphData = data.map((item) => ({
      x: item.title,
      y: Number(item.acessos),
    }));

    setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b));
    setGraph(granphData);
  }, [data]);

  return (
    <section className={`${styles.graph} animeleft`}>
      <div className={`${styles.total} ${styles.item}`}>
        <p>
          acessos:
          {total}
        </p>
      </div>
      <div className={` ${styles.graphItem}`}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{
            top: 20, bottom: 20, left: 80, right: 80,
          }}
          style={{
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={` ${styles.graphItem}`}>
        <VictoryChart>
          <VictoryBar
            data={graph}
          />
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;
