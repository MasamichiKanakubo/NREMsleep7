import { FC } from "react";
import style from "../components/calendarStyle.module.css";
import { DAYOFWEEK_LIST, HOUR_LIST, TIME_LIST } from "@/constans/timeList";

export const HUMAN_LIST = [
  { id: 1, item: "A" },
  { id: 2, item: "B" },
  { id: 3, item: "C" },
  { id: 4, item: "D" },
]


export const GridDisplay: FC<TimelineProps> = ({ dayList }) => {
  const ex1Array = [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0];
  const ex2Array = [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0];

  const ChangeTimeString: FC<{ timeString: string }> = ({ timeString }) => {
    const timeArray = timeString.split(',');
    return timeArray;
  }

  const TimeBox: FC<{ times: number[] }> = ({ times }) => {
    return (<>{times.map((time: number) => {
      return (
        <>
          <div className={`w-full block ${time === 1 ? "bg-pink-300" : "bg-white"}`} key={time}> </div>
        </>
      );
    })}</>);
  };


  return (
    <div className={style.calendarContainer}>
      <div className={style.eventContainer}>
        {DAYOFWEEK_LIST.map((dayItem, index) => {
          return (
            <div
              key={dayItem.id}
              style={{ gridRow: index + 1 }}
              className={style.calendarColumn}
            >
              {
                //4人.mapの中にtimebox
                HUMAN_LIST.map((humanItem, index) => {
                  return (
                    <div key={humanItem.id} className="flex h-full">
                      <TimeBox times={ex1Array} />
                    </div>
                  )
                })

              }
              {/* <TimeBox times={ex1Array} /> */}
            </div>
          );
        })}
      </div>
    </div>
  )
}

