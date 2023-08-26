import { WeeklyCalendar } from "../component/weeklyCalendar";
import style from '../component/calendarStyle.module.css';
import { useRef, useState } from "react";
import Modal from "../component/modal";

const [modalOpen, setModalOpen] = useState(false);

const modalInputRef = useRef();

const formModal = () => {
  setModalOpen(true);
}

const handleClose = () => {
  setModalOpen(false);
}

const handleSubmit = () => {
  console.log("submit");
  // if(!modalInputRef.current.value) return;
  // console.log("refあり");
  // const child =
  // {
  //   id: uuidv4(),
  //   name: modalInputRef.current.value,
  //   completed: false
  // }
  setModalOpen(false);
  // modalInputRef.current.value = null;
}

export default function App() {
  return (
    <div className={style.App}>
      <WeeklyCalendar />
      <Modal 
      modalOpen={modalOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      modalInputRef={modalInputRef}
      />
    </div>
  );
}
