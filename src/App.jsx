import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { createEvent, fetchEventsList, deleteEvent } from './gateway/events.js';

import { getWeekStartDate, generateWeekRange, getMonthString } from './utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isPopup, setIsPopup] = useState(false);
  const [events, setEvents] = useState([]);

  const toggleCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  const toggleNextWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() + 7)));
  };

  const togglePrevWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() - 7)));
  };

  const showPopup = () => {
    setIsPopup(true);
  };

  const hidePopup = () => {
    setIsPopup(false);
  };

  const getEventsList = () => {
    fetchEventsList()
      .then(eventsList => {
        setEvents(eventsList);
      })
      .catch(error => alert(error));
  };

  const handleSubmit = (e, eventData) => {
    e.preventDefault();

    const { title, date, startTime, endTime, description } = eventData;

    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };
    createEvent(newEvent).then(() => getEventsList());

    setIsPopup(false);
  };

  useEffect(() => {
    getEventsList();
  }, []);

  const onDeleteEvent = id => deleteEvent(id).then(() => getEventsList());

  // const { weekStartDate } = this.state;

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const monthString = getMonthString(weekStartDate);
  // console.log(monthString);
  return (
    <>
      <Header
        currentWeek={toggleCurrentWeek}
        nextWeek={toggleNextWeek}
        prevWeek={togglePrevWeek}
        monthString={monthString}
        showPopup={showPopup}
      />
      <Calendar deleteEvent={onDeleteEvent} weekDates={weekDates} events={events} />

      {isPopup && <Modal events={events} handleSubmit={handleSubmit} hidePopup={hidePopup} />}
    </>
  );
};

export default App;
