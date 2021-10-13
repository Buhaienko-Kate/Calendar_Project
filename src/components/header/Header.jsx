import React from 'react';

import './header.scss';

const Header = ({ currentWeek, nextWeek, prevWeek, monthString, showPopup }) => (
  <header className="header">
    <button className="button create-event-btn" onClick={showPopup}>
      <i className="fas fa-plus create-event-btn__icon"></i>Create
    </button>
    <div className="navigation">
      <button className="navigation__today-btn button" onClick={currentWeek}>
        Today
      </button>
      <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <span className="navigation__displayed-month">{monthString}</span>
    </div>
  </header>
);
export default Header;
