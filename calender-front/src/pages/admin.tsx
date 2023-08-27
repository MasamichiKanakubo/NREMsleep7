import React, { FC, useEffect, useState } from "react";

export type AdminProps = {
  title: string;
};


const Admin: FC<AdminProps> = () => {
  const axios = require("axios");
  const urlGeneral = `${process.env.NEXT_PUBLIC_API_BASE}/general/`;
  const urlTime = `${process.env.NEXT_PUBLIC_API_BASE}/time/`;
  const [deadline, setDeadline] = useState("");
  const [requiredtime, setRequiredtime] = useState("");
  const [timeArray, setTimeArray] = useState([]);

  useEffect(() => {
    // const generalData = {
    //   deadline: "2000-10-09",
    //   requiredtime: 10,
    // }
    // axios
    // .post(urlGeneral, generalData)
    // .then((response:{}) => {
    //   console.log(response);
    //   setDeadline(response.data.deadline);
    // }
    // )
    // .catch((error) => {
    //   console.log(error);
    // }
    // );


    axios
    .get(urlGeneral)
    .then((response:{}) => {
      setDeadline(response.data[0].deadline);
      setRequiredtime(response.data[0].requiredtime);
      console.log(response);
    }
    )
    .catch((error) => {
      console.log(error);
    }
    );
  const timeData = {
    acountName: "test",
    acountNumber: 2,
    day: 0,
    timearray: "1,0,0,0,0,0,0,1,1,0,0,0,0,1",
    key: 2
  }

  axios
    .post(urlTime, timeData)
    .then((response:{}) => {
      console.log('timeData');
      console.log(response);
      }
      )
    .catch((error) => {
    console.log(error);
    }
    );
  
  axios
    .get(urlTime)
    .then((response:{}) => {
      setTimeArray(response.data);
      console.log(response.data);
      }
      )
      .catch((error) => {
        console.log(error);
      }
      );
  }, []);



  return (
    <>
      <section className="acounts">
        <h1 className="text-blue-400">check acounts</h1>
      </section>
      <section className="generalSetting">
        <h1 className="text-blue-400">general setting</h1>
        <a>deadline:{deadline}</a>
        <br/>
        <a>requiredtime:{requiredtime}</a>
      </section>
      <section className="time">
        <h1 className="text-blue-400">time setting</h1>
        {timeArray.map((time) => (
          <div key={time.key}>
            <a>acountName:{time.acountName}</a>
            <br/>
            <a>acountNumber:{time.acountNumber}</a>
            <br/>
            <a>day:{time.day}</a>
            <br/>
            <a>timearray:</a>
            <article className="flex">
            {time.timearray.split(',').map((time,index) => (
             <div key={index}>
             {time==="1"?"⭕️":"❌"}
              </div>
              ))}
            </article>
          </div>
        ))}
      </section>
    </>
  );
};

export default Admin;
