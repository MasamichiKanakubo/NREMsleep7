import { FC } from "react";
import style from "../components/calendarStyle.module.css";
import { DAYOFWEEK_LIST } from "@/constans/timeList";

export const DayDisplay: FC<TimelineProps> = ({ dayList }) => {
    return (
        <div className={style.dayslotBox}>
            <ul className={style.dayslotList}>
                {/* {dayList.map((dayItem) => {
                    return (<li key={dayItem.date}
                        className={style.date}>
                        {dayItem.date.split("-").at(1)}/
                        {dayItem.date.split("-").at(2)}
                    </li>);
                })} */}
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
