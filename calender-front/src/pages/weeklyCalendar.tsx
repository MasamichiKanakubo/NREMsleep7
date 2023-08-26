import dayjs from "dayjs";
import { FC } from "react";
import { Timeline } from "./timeline";

export const WeeklyCalendar: FC = () => {
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
    <div className="calendarContainer">
      <Timeline dayList={dayList} />
    </div>
  );
};