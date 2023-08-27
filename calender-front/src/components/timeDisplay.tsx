import style from "../components/calendarStyle.module.css";
import { TIME_LIST } from "@/constans/timeList";

export const TimeDisplay = () => {
    return (
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
    )
}
