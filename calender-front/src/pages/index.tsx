import Image from 'next/image'
import { Inter, Turret_Road } from 'next/font/google'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";
import { DayGridView } from '@fullcalendar/daygrid/internal.js';



// document.addEventListener('DOMContentLoaded', function() {
//   let calendarEl: HTMLElement = document.getElementById('calendar')!;

//   let calendar = new Calendar(calendarEl, {
//     plugins: [ dayGridPlugin ]
//     // options here
//   });

//   calendar.render();
// });

const inter = Inter({ subsets: ['latin'] })


export default function Hoge() {

  return (
    <div>
      <FullCalendar

        plugins={[
          dayGridPlugin,
          interactionPlugin,
        ]}
        initialView='dayGridWeek'
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        initialEvents={[{ title: "initial event", start: new Date() }]}

      />
    </div>
  );
}
