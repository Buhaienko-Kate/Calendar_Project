import React from 'react';

const DeleteBtn = ({ deleteTask, id }) => (
  <div className="delete-button">
    <span
      onClick={event => {
        event.stopPropagation();
        return deleteTask(id);
      }}
      className="delete-button__text"
    >
      Delete
    </span>
  </div>
);

export default DeleteBtn;
