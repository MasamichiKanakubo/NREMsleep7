import { WeeklyCalendar } from "../components/weeklyCalendar";
import style from '../components/calendarStyle.module.css';
import { useRef, useState, useEffect } from "react";
import Modal from "../components/modal";

export default function App() {
  const sample = [{
    dayOfWeek: "月",
    startTime: "09:00",
    endTime: "12:00",
    reason: "バイト"
  },
  {
    dayOfWeek: "火",
    startTime: "13:00",
    endTime: "15:00",
    reason: "法事"
  },
]
  const count = 0;

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  })

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [schedule, setSchedule] = useState([]);

  const modalInputRef = useRef<HTMLInputElement>(null);
  const reasonRef = useRef<HTMLInputElement>(null);

  const formModal = () => {
    setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  }

  const handleSubmit = () => {
    console.log("submit");
    setModalOpen(false);

  }

  const handleDemo = () => {
    setModalOpen(true);
  }

  return (
    <div className={style.App}>
      <WeeklyCalendar />
      <button className=" p-1" onClick={handleDemo}>予定の追加</button>
      <Modal
        modalOpen={modalOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        modalInputRef={modalInputRef}
      />
      <div style={{ padding: '30px' }}>
      </div>
    </div>
  );
}
