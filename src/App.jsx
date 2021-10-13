import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { createEvent, fetchEventsList, deleteEvent } from './gateway/events.js';

import { getWeekStartDate, generateWeekRange, getMonthString } from './utils/dateUtils.js';

import './common.scss';

class App extends Component {
  state = {
    weekStartDate: new Date(),
    isPopup: false,
    events: [],
  };

  toggleCurrentWeek = () => {
    this.setState({
      weekStartDate: new Date(),
    });
  };

  toggleNextWeek = () => {
    this.setState({
      weekStartDate: new Date(
        this.state.weekStartDate.setDate(new Date(this.state.weekStartDate).getDate() + 7),
      ),
    });
  };

  togglePrevWeek = () => {
    this.setState({
      weekStartDate: new Date(
        this.state.weekStartDate.setDate(new Date(this.state.weekStartDate).getDate() - 7),
      ),
    });
  };

  showPopup = () => {
    this.setState({
      isPopup: true,
    });
  };

  hidePopup = () => {
    this.setState({
      isPopup: false,
    });
  };

  getEventsList = () => {
    fetchEventsList()
      .then(eventsList => {
        this.setState({
          events: eventsList,
        });
      })
      .catch(error => alert(error));
  };

  handleSubmit = (e, eventData) => {
    e.preventDefault();

    const { title, date, startTime, endTime, description } = eventData;

    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };
    createEvent(newEvent).then(() => this.getEventsList());

    this.setState({
      isPopup: false,
    });
  };

  componentDidMount() {
    this.getEventsList();
  }

  onDeleteEvent = id => deleteEvent(id).then(() => this.getEventsList());

  render() {
    const { weekStartDate } = this.state;

    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    const monthString = getMonthString(weekStartDate);
    // console.log(monthString);
    return (
      <>
        <Header
          currentWeek={this.toggleCurrentWeek}
          nextWeek={this.toggleNextWeek}
          prevWeek={this.togglePrevWeek}
          monthString={monthString}
          showPopup={this.showPopup}
        />
        <Calendar
          deleteEvent={this.onDeleteEvent}
          weekDates={weekDates}
          events={this.state.events}
        />

        {this.state.isPopup && (
          <Modal
            events={this.state.events}
            handleSubmit={this.handleSubmit}
            hidePopup={this.hidePopup}
          />
        )}
      </>
    );
  }
}

export default App;
