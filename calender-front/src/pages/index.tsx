import { WeeklyCalendar } from "../components/weeklyCalendar";
import style from "../components/calendarStyle.module.css";
import { useRef, useState, useEffect } from "react";
import Modal from "../components/modal";
import LoginModel from "../components/loginmodel";
import Roulettemodal, {RouletteModal} from "../components/roulettemodal";

export type timeStateType = {
  acountName: string;
  acountNumber: number;
  day: number;
  timearray: string;
  key: number;
};

export default function App() {
  const axios = require("axios");
  const urlGeneral = `${process.env.NEXT_PUBLIC_API_BASE}/general/`;
  const urlTime = `${process.env.NEXT_PUBLIC_API_BASE}/time/`;
  const [deadline, setDeadline] = useState("");
  const [requiredtime, setRequiredtime] = useState("");
  const [timeState, setTimeState] = useState<timeStateType>();
  const [isLoginShow, setIsLoginShow] = useState(true);
  const [isRouletteShow, setIsRouletteShow] = useState(false);
 
  const sample = [
    {
      dayOfWeek: "月",
      startTime: "09:00",
      endTime: "12:00",
      reason: "バイト",
    },
    {
      dayOfWeek: "火",
      startTime: "13:00",
      endTime: "15:00",
      reason: "法事",
    },
  ];

  const postGeneralData = (data: {
    deadline: string;
    requiredtime: number;
  }) => {
    axios
      .post(urlGeneral, { data })
      .then((response: {}) => {
        console.log(response);
        setDeadline(response.data.deadline);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGeneralData = () => {
    axios
      .get(urlGeneral)
      .then((response: {}) => {
        setDeadline(response.data[0].deadline);
        setRequiredtime(response.data[0].requiredtime);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postTimeData = (data: {
    acountName: string;
    acountNumber: number;
    day: number;
    timearray: string;
    key: number;
  }) => {
    axios
      .post(urlTime, timeData)
      .then((response: {}) => {
        console.log("timeData");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  useEffect(() => {
    document.title = `hello`;
  });

  const closeRouletteModal = () => {
    setIsRouletteShow(false);
  };

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [schedules, setSchedules] = useState([]);

  const modalInputRef = useRef<HTMLInputElement>(null);
  const reasonRef = useRef<HTMLInputElement>(null);

  const toggleModal = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    const dateInput = document.querySelector("input[name='曜日']");
    const startTimeInput = document.querySelector("input[name='開始時刻']");
    const endTimeInput = document.querySelector("input[name='終了時刻']");
    const reason = modalInputRef.current?.value;
    setModalOpen(false);
  };

  const handleDemo = () => {
    setModalOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginShow(false);
  };

  return (
    <div className={style.App}>
      <WeeklyCalendar />
      <button
        className="p-1 w-full absolute  top-20 left-[1000px] text-cyan-50 bg-cyan-500"
        onClick={handleDemo}
      >
        予定の追加
      </button>
      <Modal
        modalOpen={modalOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        modalInputRef={modalInputRef}
      />
      <div style={{ padding: "30px" }}></div>
      <button
        className="p-1 w-full absolute  top-40 left-[1000px] text-cyan-50 bg-cyan-500"
        onClick={() => setIsRouletteShow((prev) => !prev)}
      >
        roulette
      </button>
      {isRouletteShow && <RouletteModal closeModal={closeRouletteModal} />}
      <button
        className="p-1 w-full absolute  top-2 left-[1000px] text-cyan-50 bg-cyan-500"
        onClick={() => setIsLoginShow((prev) => !prev)}
      >
        login
      </button>
      {isLoginShow && <LoginModel handleCloseLogin={handleCloseLogin} />}
    </div>
  );
}
