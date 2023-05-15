const btnPause = document.getElementById("pause-timer");
const btnStart = document.getElementById("start-timer");
const btnReset = document.getElementById("reset-timer");
const timerDisplay = document.querySelector(".timer-display");
const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");
const $seconds = document.getElementById("seconds");
const $milliseconds = document.getElementById("milliseconds");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let clock;
let isRunning = false;

const calculateTime = () => {
  milliseconds += 10;

  if (milliseconds === 1000) {
    seconds += 1;
    milliseconds = 0;
  }

  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }

  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }

  drawTimer();
};

const drawTimer = () => {
  $hours.textContent = String(hours).padStart(2, "0");
  $minutes.textContent = String(minutes).padStart(2, "0");
  $seconds.textContent = String(seconds).padStart(2, "0");
  $milliseconds.textContent = String(milliseconds).padStart(3, "00");
};

const startClock = () => {
  if (!isRunning) {
    isRunning = true;
    clock = setInterval(calculateTime, 10);
  }
};

const pauseClock = () => {
  if (isRunning) {
    clearInterval(clock);
    isRunning = false;
  }
};

const resetClock = () => {
  clearInterval(clock);
  isRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;

  drawTimer();
};

document.addEventListener("click", (event) => {
  if (event.target === btnStart) {
    startClock();
  }

  if (event.target === btnPause) {
    pauseClock();
  }

  if (event.target === btnReset) {
    resetClock();
  }
});
