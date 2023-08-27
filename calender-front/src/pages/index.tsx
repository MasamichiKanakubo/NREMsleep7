import { WeeklyCalendar } from "../components/weeklyCalendar";
import style from '../components/calendarStyle.module.css';
import { useRef, useState, useEffect } from "react";
import Modal from "../components/modal";
import LoginModel from "@/components/loginmodel";
import {RouletteModal} from "@/components/roulettemodal";

export default function App() {
    const [isLoginShow,setIsLoginShow] = useState(true)
    const [isRouletteShow, setIsRouletteShow] = useState(false)
    const closeLoginModal = () => {
        setIsLoginShow(false)
    }
    const closeRouletteModal = () => {
        setIsRouletteShow(false)
    }
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
        document.title = `hello`;
    })

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [schedules, setSchedules] = useState([]);

    const modalInputRef = useRef<HTMLInputElement>(null);
    const reasonRef = useRef<HTMLInputElement>(null);

    const toggleModal = () => {
        setModalOpen(true);
    }

    const handleClose = () => {
        setModalOpen(false);
    }

    const handleSubmit = () => {
        const dateInput = document.querySelector("input[name='曜日']");
        const startTimeInput = document.querySelector("input[name='開始時刻']");
        const endTimeInput = document.querySelector("input[name='終了時刻']");
        const reason = modalInputRef.current?.value;

        // if (dateInput && startTimeInput && endTimeInput && reason) {
        //   const scheduleEntry = {
        //     date: dateInput.value,
        //     startTime: startTimeInput.value,
        //     endTime: endTimeInput.value,
        //     reason: reason
        //   };

        //   // スケジュールを登録する処理（例：setScheduleなど）
        //   console.log("New schedule entry:", scheduleEntry);
        //   const newSchedul = [...schedules];
        //   setSchedules(prevSchedule => [...prevSchedule, newScheduleEntry]);

        // 登録後にモーダルを閉じる
        //   handleClose();
        // }
        setModalOpen(false);

    }

    const handleDemo = () => {
        setModalOpen(true);
    }

    return (
        <div className={style.App}>
            <WeeklyCalendar />
            <button className="p-1 w-full absolute  top-10 left-[1000px]" onClick={handleDemo}>予定の追加</button>
            <Modal
                modalOpen={modalOpen}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                modalInputRef={modalInputRef}
            />
            <div style={{ padding: '30px' }}>
            </div>
            <button className="p-1 w-full absolute  top-20 left-[1000px]"　onClick={()=>setIsRouletteShow((prev)=>!prev)}>roulette</button>
            {
                isRouletteShow && <RouletteModal closeModal={closeRouletteModal}/>
            }
            <button className="p-1 w-full absolute  top-2 left-[1000px]"　onClick={()=>setIsLoginShow((prev)=>!prev)}>login</button>
            {
                isLoginShow && <LoginModel closeModal={closeLoginModal}/>
            }
        </div>
    );
}