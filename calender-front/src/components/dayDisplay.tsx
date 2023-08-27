import style from "../components/calendarStyle.module.css";
import { DAYOFWEEK_LIST } from "@/constans/timeList";

export const DayDisplay = () => {
    return (
        <div className={style.dayslotBox}>
            <ul className={style.dayslotList}>
                {DAYOFWEEK_LIST.map((dayItem) => {
                    return (<li key={dayItem.id}
                        className={style.date}>
                        {dayItem.item}
                    </li>);
                })}
            </ul>
        </div>
    )
}
