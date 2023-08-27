import { timeStateType } from "@/pages";

export type TimelineProps = {
    dayList: {
      day: number;
      date: string;
    }[];
    timeState:timeStateType
  };
