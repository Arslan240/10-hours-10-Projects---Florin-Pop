const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2023';


function countdown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const difference = newYearsDate - currentDate;
  const totalSeconds = difference / 1000; //milliseconds in a second

  const days = Math.floor(totalSeconds / 86400); //seconds in a day
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  console.log(days, hours, minutes, seconds);
  
  // console.log(newYearsDate - currentDate);
}

function formatTime(time){
  // if passed value is less than 10 then a 0 is added before it for formatting.
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);