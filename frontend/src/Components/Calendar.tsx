import FullCalendar from "@fullcalendar/react"
import daygrid from "@fullcalendar/daygrid"

const Calendar = () => {
  return (
    <>
      <FullCalendar
        plugins={[daygrid]}
        initialView="dayGridMonth"
        weekends={true}
      />
    </>
  )
}

export default Calendar