import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestemp(timestampMs) {


  //-------------------------------------------------------------------------------
  const timestampDayjs = dayjs(timestampMs);//<-Знайти причину, чому тут отримую NaN
  console.log(timestampMs)
  console.log(timestampDayjs)
  //--------------------------------------------------------------------------------

  const nowDayjs = dayjs()

  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs)
  };
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
  return seconds;
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
  return minutes;
}

function getRemainingHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
  return hours;
}

function getRemainingDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, 'days');
  return days;
}
