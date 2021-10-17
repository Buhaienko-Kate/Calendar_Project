import React from 'react';
import PropTypes from 'prop-types';

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

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default DeleteBtn;
