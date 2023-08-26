import { FC } from "react";
import style from './calendarStyle.module.css';

export const TIME_LIST = [
    { id: 0, time: "09:00" },
    { id: 1, time: "10:00" },
    { id: 2, time: "11:00" },
    { id: 3, time: "12:00" },
    { id: 4, time: "13:00" },
    { id: 5, time: "14:00" },
    { id: 6, time: "15:00" },
    { id: 7, time: "16:00" },
    { id: 8, time: "17:00" },
    { id: 9, time: "18:00" },
    { id: 10, time: "19:00" },
    { id: 11, time: "20:00" },
    { id: 12, time: "21:00" },
    { id: 13, time: "22:00" }
  ];
  
  export const HOUR_LIST = [
    { hour: 9 },
    { hour: 10 },
    { hour: 11 },
    { hour: 12 },
    { hour: 13 },
    { hour: 14 },
    { hour: 15 },
    { hour: 16 },
    { hour: 17 },
    { hour: 18 },
    { hour: 19 },
    { hour: 20 },
    { hour: 21 },
    { hour: 22 }
  ];

type TimelineProps = {
  dayList: {
    day: number;
    date: string;
  }[];
};

export const Timeline: FC<TimelineProps> = ({ dayList }) => {
  const EmptyCell = (date: { date: string }) => {
    return (
      <>
        {HOUR_LIST.map((hourList, index) => {
          return (
            <div
              key={hourList.hour}
              onClick={() => {
                console.log(date, `${hourList.hour}時`);
              }}
              className={style.empty}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className={style.timeslotsContainer}>
      <div className={style.timeslotBox}>
        <ul className={style.timeslotList}>
          {TIME_LIST.map((timeItem) => {
            const splitedHour = Number(timeItem.time.split(":")[0]);
            const time = `${splitedHour}:${timeItem.time.split(":")[1]}`;
            return (
              <li key={timeItem.id} className={style.timeslotItem}>
                {time}
              </li>
            );
          })}
        </ul>
      </div>
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
                  style={{ gridColumn: index + 1 }}
                  className={style.calendarColumn}
                >
                  <div className={style.date}>
                    {dayItem.date.split("-").at(1)}-
                    {dayItem.date.split("-").at(2)}
                  </div>
                  <EmptyCell date={dayItem.date} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
