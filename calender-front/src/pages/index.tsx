import { WeeklyCalendar } from "./weeklyCalendar";
import style from './calendarStyle.module.css';

export default function App() {
  return (
    <div className={style.App}>
      <WeeklyCalendar />
    </div>
  );
}
