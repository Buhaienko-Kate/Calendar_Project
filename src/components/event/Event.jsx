import React, { useState } from 'react';
import { deleteValidation } from '../../validation/validation.js';
import DeleteBtn from './DeleteBtn.jsx';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, dateFrom, deleteEvent }) => {
  const [isDelete, setDelete] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const toggleDelete = () => {
    setDelete(!isDelete);
  };

  const hideDelete = () => {
    setDelete(false);
  };

  const deleteEventTask = id => {
    if (deleteValidation(dateFrom)) {
      hideDelete();
    } else {
      deleteEvent(id);
    }
  };

  return (
    <div onClick={toggleDelete} style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isDelete && <DeleteBtn deleteTask={deleteEventTask} id={id} />}
    </div>
  );
};

export default Event;
