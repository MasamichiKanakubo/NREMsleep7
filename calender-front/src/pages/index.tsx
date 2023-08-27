import { WeeklyCalendar } from "../components/weeklyCalendar";
import style from '../components/calendarStyle.module.css';
import { useRef, useState, useEffect } from "react";
import Modal from "../components/modal";

export default function App() {
  // const sample = {
  //   starttime:
  //   endtime:
  //   reason:

  // }
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
    // setSchedule(sample);
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
        <label htmlFor="time">開始時刻 </label>
        <input type="time" name="開始時刻" className="rounded-sm " min="9:00" max="22:00" step="3600" list="data-list"/>
        <label htmlFor="time">終了時刻 </label>
        <input type="time" name="終了時刻" className="rounded-sm " min="9:00" max="22:00" step="3600" list="data-list"/>
        <datalist id="data-list">
          <option value="09:00"></option>
          <option value="10:00"></option>
          <option value="11:00"></option>
          <option value="12:00"></option>
          <option value="13:00"></option>
          <option value="14:00"></option>
          <option value="15:00"></option>
          <option value="16:00"></option>
          <option value="17:00"></option>
          <option value="18:00"></option>
          <option value="19:00"></option>
          <option value="20:00"></option>
          <option value="21:00"></option>
          <option value="22:00"></option>
        </datalist>
        <input type="text" className='rounded-sm p-1 placeholder:text-gray-500' ref={reasonRef} placeholder=' 理由' />
      </div>
    </div>
  );
}
