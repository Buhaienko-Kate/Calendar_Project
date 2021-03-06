import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, deleteEvent, children }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {children}
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => new Date(event.dateFrom).getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number,
  dayEvents: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Day;
