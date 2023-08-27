import { FC } from "react";
import style from "../components/calendarStyle.module.css";
import { HOUR_LIST, TIME_LIST } from "@/constans/timeList";

export const GridDisplay: FC<TimelineProps> = ({ dayList }) => {
  const ex1Array = [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0];
  const ex2Array = [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0];

  
  const TimeBox: FC<{ times: number[] }> = ({ times }) => {
    return (<>{times.map((time: number) => {
      return (
        <>
          <div className={`w-full h-[25px] block ${time === 1 ? "bg-pink-300" : "bg-white"}`} key={time}>a</div>
        </>
      );
    })}</>);
  };


  return (
    <div className={style.calendarContainer}>
      <div className={style.calendarWrapper}>
        <div>
          {TIME_LIST.map((timeItem) => (
            <div key={timeItem.id}>
              <div className={style.horizontalHeight} />
            </div>
          ))}
        </div>
        <div className={style.eventContainer}>
          {dayList.map((dayItem, index) => {
            return (
              <div
                key={dayItem.date}
                style={{ gridRow: index + 1 }}
                className={style.calendarColumn}
              >
                <TimeBox times={ex1Array} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

