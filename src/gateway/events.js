const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2021, 9, 12, 10, 15),
    dateTo: new Date(2021, 9, 12, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2021, 9, 11, 9, 15),
    dateTo: new Date(2021, 9, 11, 10, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2021, 9, 11, 13, 30),
    dateTo: new Date(2021, 9, 11, 14, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2021, 9, 11, 15, 30),
    dateTo: new Date(2021, 9, 11, 16, 0),
  },
];

export default events;

const baseUrl = 'https://614086504a700c0017b0cd68.mockapi.io/api/v1/calendar';

export const createEvent = eventData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internet Server Error. Can't display events");
    }
  });

export const fetchEventsList = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      throw new Error("Internet Server Error. Can't display events");
    }
    return response.json();
  });

export const deleteEvent = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
