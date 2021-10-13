import moment from 'moment';

export const deleteValidation = dateFrom => {
  const currentTime = moment().format('YYYY-MM-DD HH:mm');
  const beforeDiff = moment(dateFrom).diff(currentTime, 'minutes');

  if (beforeDiff < 15 && beforeDiff >= 0) {
    alert("You can't skip the event, when it less than 15 mins before it'll start");
    return true;
  } else {
    return false;
  }
};
