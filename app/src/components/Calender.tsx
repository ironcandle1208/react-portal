import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'

const Calendar: React.FC = props => {
    return (
        <div>
            <FullCalendar
                locale='ja'
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
            />
        </div>
    )
}

export default Calendar