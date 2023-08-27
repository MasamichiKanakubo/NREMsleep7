import { FC } from "react";
import style from "../components/calendarStyle.module.css";
import { HOUR_LIST, TIME_LIST } from "@/constans/timeList";

export const GridDisplay: FC<TimelineProps> = ({ dayList }) => {
  // const EmptyCell = (date: { date: string }) => {
  //   return (
  //     <>
  //       {HOUR_LIST.map((hourList, index) => {
  //         return (
  //           <div
  //             key={hourList.hour}
  //             onClick={() => {
  //               console.log(date, `${hourList.hour}時`);
  //             }}
  //             className={style.empty}
  //           />
  //         );
  //       })}
  //     </>
  //   );
  // };

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
                {/* <EmptyCell date={dayItem.date} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
