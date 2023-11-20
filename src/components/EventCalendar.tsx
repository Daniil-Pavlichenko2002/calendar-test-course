import { Badge, BadgeProps, Calendar } from 'antd';
import React from 'react'
import { IEvent } from '../models/IEvent';
import { Dayjs } from 'dayjs'
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = (props) => {
   
  const dateCellRender = (value: Dayjs) => {
    // const listData = getListData(value);
    const formateDate = formatDate(value.toDate())
    const currentDayEvents = props.events.filter(ev => ev.date === formateDate )
    return (
      <div>
        {currentDayEvents.map((ev, i) => 
            <div key={i}>{ev.description}</div>
        )}
      </div>
      // <ul className="events">
      //   {listData.map((item) => (
      //     <li key={item.content}>
      //       <Badge status={item.type as BadgeProps['status']} text={item.content} />
      //     </li>
      //   ))}
      // </ul>
    );
  };

  return (
    <Calendar
    dateCellRender={dateCellRender}
    />
  )
}

export default EventCalendar;