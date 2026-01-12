import S from './Dashboard.module.css';
import { Clock } from './Componens/Clock.tsx';
import { Chart } from './Componens/Chart.tsx';
import { Tracker } from './Componens/Tracker.tsx';

export const Dashboard = () => {
  return (
    <div className={S.dashboard}>
      <div className={S.header}>
        <Clock />
      </div>
      <div className={S.content}>
        <Chart />
        <Tracker />
      </div>
    </div>
  );
};
