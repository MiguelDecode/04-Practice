export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;

  document.addEventListener("click", (event) => {
    if (event.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      event.target.disabled = true;
    }

    if (event.target.matches(btnStop)) {
      clearInterval(clockTempo);
      document.querySelector(clock).innerHTML = null;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}
export function digitalAlarm(alarm, btnPlay, btnStop) {
  let alarmTempo;

  document.addEventListener("click", (event) => {
    if (event.target.matches(btnPlay)) {
      let alarmTempo = setTimeout(() => {
        document.querySelector(alarm).play();
      }, 2000);

      event.target.disabled = true;
    }

    if (event.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      document.querySelector(alarm).pause();
      document.querySelector(alarm).currentTime = 0;

      document.querySelector(btnPlay).disabled = false;
    }
  });
}
