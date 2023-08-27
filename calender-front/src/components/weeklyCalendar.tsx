import dayjs from "dayjs";
import { FC } from "react";
import { Timeline } from "./timeline";
import style from './calendarStyle.module.css';
import { timeStateType } from '../pages/index';

type WeeklyCalendarProps = {
  timeState: timeStateType
};

export const WeeklyCalendar: FC<WeeklyCalendarProps> = ({timeState}) => {
  const weekStartDayOffset = 0;
  const _date = dayjs();
  const _day = _date.day();
  const dayList = Array(7)
    .fill(0)
    .map((_, idx) => {
      const day = weekStartDayOffset + idx;
      const dayFormat = dayjs(
        _date.date(_date.date() - _day + weekStartDayOffset + idx)
      );
      return { day: day, date: dayFormat.format("YYYY-MM-DD") };
    });

  return (
    <div className={style.calendarContainer}>
      <Timeline dayList={dayList} timeState={timeState}/>
    </div>
  );
};
