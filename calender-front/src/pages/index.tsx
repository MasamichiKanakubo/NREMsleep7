import { WeeklyCalendar } from "../component/weeklyCalendar";
import style from '../component/calendarStyle.module.css';

export default function App() {
  return (
    <div className={style.App}>
      <WeeklyCalendar />
    </div>
  );
}
