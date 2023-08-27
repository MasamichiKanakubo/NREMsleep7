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


  const timeArray = [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0];
  const TimeBox  = () => {
      return (<>{timeArray.map((time, index) => {
      return (
        <>
        <p className="text-lg">xxxx</p>
        <div className={`w-full h-[100px] block bg-red-500`} key={time}>a</div>        
        </>
        
        // <>{((): any => {
        //   if (time == 1) {
        //     return (<div className=" bg-red-600 w-full h-[100px] block" key={time} style={{ gridColumn: index + 1 }}></div>);
        //   } else {
        //     return (<div className=" bg-blue-600 w-full h-[100px] block" key={time} style={{ gridColumn: index + 1 }}></div>);
        //   }
        // })()}</>
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
                  
                    <TimeBox />
                    <h1 className="bg-slate-300">llll</h1>

                {/* <EmptyCell date={dayItem.date} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

