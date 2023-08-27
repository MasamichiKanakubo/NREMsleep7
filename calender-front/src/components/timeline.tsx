import { FC } from "react";
import style from './calendarStyle.module.css';
import { GridDisplay } from "./gridDisplay";
import { TimeDisplay } from "./timeDisplay";
import { DayDisplay } from "./dayDisplay";
import { TimelineProps } from "@/constans/dayListType";

export const Timeline: FC<TimelineProps> = ({ dayList, timeState }) => {
  return (
    <div className={style.timeslotsContainer}>
      <DayDisplay />
      <TimeDisplay />
      <GridDisplay />
    </div>
  );
};
