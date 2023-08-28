import React, { useRef } from "react";
import { FC } from "react";
const { v4: uuidv4 } = require('uuid');

export type ModalProps = {
  modalOpen: boolean;
  handleClose: () => void;
  acountName: string;
  acountNumber: number;
};

const Modal: FC<ModalProps> = ({
  modalOpen,
  handleClose,
  acountName,
  acountNumber,
}) => {
  const dayOfWeekRef = React.useRef<HTMLSelectElement>(null);
  const startTimeRef = React.useRef<string>();
  const endTimeRef = React.useRef<string>(null);
  const urlTime = `${process.env.NEXT_PUBLIC_API_BASE}/time/`;
  const axios = require("axios");
  const postTimeData = (data: {
    acountName: string;
    acountNumber: number;
    day: number;
    timearray: string;
    key: number;
  }) => {
    axios
      .post(urlTime, data)
      .then((response: {}) => {
        console.log("timeData");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dayToNum = ():number => {
    if(dayOfWeekRef.current?.value === "1"){
      return 1;
    }
    if(dayOfWeekRef.current?.value === "2"){
      return 2;
    }
    if(dayOfWeekRef.current?.value === "3"){
      return 3;
    }
    if(dayOfWeekRef.current?.value === "4"){
      return 4;
    }
    if(dayOfWeekRef.current?.value === "5"){
      return 5;
    }
    if(dayOfWeekRef.current?.value === "6"){
      return 6;
    }
    if(dayOfWeekRef.current?.value === "7"){
      return 7;
    }
    return 0;
  };
  const timeToArray = (startTime: string, endTime: string):string => {
    var timeArray:string = "";
    if(startTime==="9"){
      timeArray = "1";
    }
    else{
      timeArray = "0";
    }
    for (let i = 1; i <= 12; i++) {
      if (Number(startTime) <= i-9 && i-9 < Number(endTime)) {
        timeArray = timeArray + ",0";
      }
      timeArray = timeArray + ",1";
    }
    return timeArray;
  };

  const handleSubmit = () => {
    console.log('選択された曜日の値:', dayOfWeekRef.current?.value);
    const dataToPost = {
      acountName: acountName,
      acountNumber: acountNumber,
      day: dayToNum(dayOfWeekRef.current.value),
      timearray: timeToArray(startTimeRef.current.value,endTimeRef.current.value),
      key: uuidv4(),
    };
    console.log("dataToPost");
    console.log(dataToPost);
    postTimeData(dataToPost);
    handleClose();
  };

  if (!modalOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
      <div className="bg-white rounded-md mt-60 m-auto pt-5 p-10 ">
        <button
          className="text-gray-400 float-right text-3xl font-bold hover:text-black focus:text-black"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className="mt-4">
          <label
            htmlFor="day"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            曜日
          </label>
          <select
            name="曜日"
            id="day"
            ref={dayOfWeekRef}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="1" className="text-center">
              日
            </option>
            <option value="2" className="text-center">
              月
            </option>
            <option value="3" className="text-center">
              火
            </option>
            <option value="4" className="text-center">
              水
            </option>
            <option value="5" className="text-center">
              木
            </option>
            <option value="6" className="text-center">
              金
            </option>
            <option value="7" className="text-center">
              土
            </option>
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="start-time"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            開始時刻
          </label>
          <select
            name="開始時刻"
            id="start-time"
            ref={dayOfWeekRef}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="9" className="text-center">
               9:00
            </option>
            <option value="10" className="text-center">
              10:00
            </option>
            <option value="11" className="text-center">
              11:00
            </option>
            <option value="12" className="text-center">
              12:00
            </option>
            <option value="13" className="text-center">
              13:00
            </option>
            <option value="14" className="text-center">
              14:00
            </option>
            <option value="15" className="text-center">
              15:00
            </option>
            <option value="16" className="text-center">
              16:00
            </option>
            <option value="17" className="text-center">
              17:00
            </option>
            <option value="18" className="text-center">
              18:00
            </option>
            <option value="19" className="text-center">
              19:00
            </option>
            <option value="20" className="text-center">
              20:00
            </option>
            <option value="21" className="text-center">
              21:00
            </option>
            <option value="22" className="text-center">
              22:00
            </option>
          </select>
        </div> 
        <div className="mt-4">
          <label
            htmlFor="end-time"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            終了時刻
          </label>
          <select
            name="終了時刻"
            id="end-time"
            ref={dayOfWeekRef}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="9" className="text-center">
               9:00
            </option>
            <option value="10" className="text-center">
              10:00
            </option>
            <option value="11" className="text-center">
              11:00
            </option>
            <option value="12" className="text-center">
              12:00
            </option>
            <option value="13" className="text-center">
              13:00
            </option>
            <option value="14" className="text-center">
              14:00
            </option>
            <option value="15" className="text-center">
              15:00
            </option>
            <option value="16" className="text-center">
              16:00
            </option>
            <option value="17" className="text-center">
              17:00
            </option>
            <option value="18" className="text-center">
              18:00
            </option>
            <option value="19" className="text-center">
              19:00
            </option>
            <option value="20" className="text-center">
              20:00
            </option>
            <option value="21" className="text-center">
              21:00
            </option>
            <option value="22" className="text-center">
              22:00
            </option>
          </select>
        </div>
        <div className="mt-4">
          <button
            className="rounded-md border border-black p-1"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
