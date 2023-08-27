import { FC } from "react";
import style from './calendarStyle.module.css';
import { GridDisplay } from "./gridDisplay";
import { TimeDisplay } from "./timeDisplay";
import { DayDisplay } from "./dayDisplay";

export const Timeline: FC<TimelineProps> = ({ dayList }) => {
  return (
    <div className={style.timeslotsContainer}>
      <DayDisplay />
      <TimeDisplay />
      <GridDisplay />
    </div>
  );
};
