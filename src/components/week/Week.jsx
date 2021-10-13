import React from 'react';
import Day from '../day/Day';
import RedLine from '../radLine/Redline';

import './week.scss';

const Week = ({ weekDates, events, deleteEvent }) => (
  <div className="calendar__week">
    {weekDates.map(dayStart => {
      const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

      //getting all events from the day we will render
      const dayEvents = events.filter(
        event => new Date(event.dateFrom) > dayStart && new Date(event.dateTo) < dayEnd,
      );

      const curentDay = new Date().getDate();

      const key = dayStart.getDate();

      return (
        <Day
          key={dayStart.getDate()}
          dataDay={dayStart.getDate()}
          dayEvents={dayEvents}
          deleteEvent={deleteEvent}
          events={events}
        >
          {curentDay === key && <RedLine />}
        </Day>
      );
    })}
  </div>
);
export default Week;
