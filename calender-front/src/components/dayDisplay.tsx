import { FC } from "react";
import style from "../components/calendarStyle.module.css";

export const DayDisplay: FC<TimelineProps> = ({ dayList }) => {
    return (
        <div className={style.dayslotBox}>
            <ul className={style.dayslotList}>
                {dayList.map((dayItem) => {
                    return (<li key={dayItem.date}
                        className={style.date}>
                        {dayItem.date.split("-").at(1)}/
                        {dayItem.date.split("-").at(2)}
                    </li>);
                })}
            </ul>
        </div>
    )
}
