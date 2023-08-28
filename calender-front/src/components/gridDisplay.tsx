import { FC, useState } from "react";
import style from "../components/calendarStyle.module.css";
import { DAYOFWEEK_LIST, HOUR_LIST, TIME_LIST } from "@/constans/timeList";
import axios from "axios";
import { timeStateType } from "@/pages";
import { data } from "autoprefixer";

export const HUMAN_LIST = [
  { id: 1, item: "A" },
  { id: 2, item: "B" },
  { id: 3, item: "C" },
  { id: 4, item: "D" },
]

export const GridDisplay = () => {
  const ex1Array = [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0];
  const ex2Array = [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0];
  const ex3Array = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1];
  const ex4Array = [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1];

  const ex5Array = [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
  const ex6Array = [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0];
  const ex7Array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
  const ex8Array = [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
  
  const ex9Array = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  const ex10Array = [1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0];
  const ex11Array = [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const ex12Array = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0];


  const example1 = [
    ex1Array, ex2Array, ex3Array, ex4Array
  ];
  const example2=[ex5Array, ex5Array, ex6Array, ex7Array];
  const example3=[ex8Array, ex9Array, ex10Array, ex11Array];

  const example = [example1, example2, example3];

  const axios = require("axios");
  const urlTime = `${process.env.NEXT_PUBLIC_API_BASE}/time/`;
  const [timeState, setTimeState] = useState<timeStateType>();
  const getTimeData = () => {
    axios
      .get(urlTime)
      .then((response: {}) => {
        setTimeState(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const ChangeTimeString: FC<{ timeString: string }> = ({ timeString }) => {
    const timeArray = timeString.split(',');
    return timeArray;
  }

  const TimeBox: FC<{ id:number, times: number[] }> = ({ id, times }) => { 
    const changeBgColor = (id: number):string => {
      if(id===1){
        return "bg-pink-300";
      }
      if(id===2){
        return "bg-green-300";
      }
      if(id===3){
        return "bg-blue-300";
      }
      return "bg-yellow-300";
    }
    return (<>{times.map((time: number) => {
      return (
        <>
          <div className={`w-full block ${time === 1 ? changeBgColor(id) : "bg-white"}`} key={time}> </div>
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
                    <div key={humanItem.id} className="flex h-full">{
                    }
                      <TimeBox id={humanItem.id} times={example1[index]} />
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

