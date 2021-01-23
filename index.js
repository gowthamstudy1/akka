document.addEventListener("DOMContentLoaded", function () {
  const daysCountdown = document.querySelector("#days");
  const hoursCountdown = document.querySelector("#hours");
  const minutesCountdown = document.querySelector("#minutes");
  const secondsCountdown = document.querySelector("#seconds");

  const currentTime = new Date();
  let yearOfTheEvent = currentTime.getFullYear();
  let eventDate = new Date(yearOfTheEvent, 0, 31);
  eventDate.setHours(10);
  eventDate.setMinutes(30);
  const isAnniversery =
    currentTime.getMonth() === 0 &&
    currentTime.getDate() === 03 &&
    currentTime.getFullYear != 2021;

  function countdown() {
    const now = new Date();

    if (now > eventDate) {
      eventDate = new Date(yearOfTheEvent + 1, 0, 31);
    } else if (now.getFullYear() === eventDate.getFullYear() + 1) {
      eventDate = new Date(now.getFullYear(), 01, 31);
    }

    const currentTime = now.getTime();
    const eventTime = eventDate.getTime();
    const remainingTime = eventTime - currentTime;

    let seconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    daysCountdown.textContent = days > 9 ? days : "0" + days;
    hoursCountdown.textContent = hours > 9 ? hours : "0" + hours;
    minutesCountdown.textContent = minutes > 9 ? minutes : "0" + minutes;
    secondsCountdown.textContent = seconds > 9 ? seconds : "0" + seconds;

    setTimeout(countdown, 1000);
  } // end of countdown

  countdown();
}); // end of DOMContentLoaded
