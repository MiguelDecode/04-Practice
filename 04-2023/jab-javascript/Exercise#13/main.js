const $timer = document.querySelector(".calculadora");
const $btn = document.querySelector(".btn");
const $minutesTens = document.getElementById("minutes-tens");
const $minutesUnits = document.getElementById("minutes-units");
const $secondsTens = document.getElementById("seconds-tens");
const $secondsUnits = document.getElementById("seconds-units");

let minutes = 0;
let seconds = 0;
let isRunning = false;

const startTimer = () => {
  crono = setInterval(() => {
    seconds--;

    if (seconds < 0 && minutes !== 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes === 0 && seconds === 0) {
      clearInterval(crono);
      document.querySelector("audio").play();
    }

    drawTimer();
  }, 1000);
};

const stopTimer = () => {
  clearInterval(crono);
  document.querySelector("audio").pause();
};

const drawTimer = () => {
  if (minutes < 60) {
    if (minutes >= 10) {
      $minutesTens.textContent = String(minutes).slice(0, 1);
      $minutesUnits.textContent = String(minutes).slice(1, 2);
    } else if (minutes < 10) {
      $minutesTens.textContent = 0;
      $minutesUnits.textContent = minutes;
    }
  }

  if (seconds < 60) {
    if (seconds >= 10) {
      $secondsTens.textContent = String(seconds).slice(0, 1);
      $secondsUnits.textContent = String(seconds).slice(1, 2);
    } else if (seconds < 10) {
      $secondsTens.textContent = 0;
      $secondsUnits.textContent = seconds;
    }
  }

  if (minutes >= 60) {
    $minutesTens.textContent = 0;
    $minutesUnits.textContent = 0;
    minutes = 0;
  }
  if (seconds >= 60) {
    $secondsTens.textContent = 0;
    $secondsUnits.textContent = 0;
    seconds = 0;
  }
};

$timer.addEventListener("click", (event) => {
  if (event.target === $minutesTens) {
    minutes += 10;
  }

  if (event.target === $minutesUnits) {
    minutes += 1;
  }

  if (event.target === $secondsTens) {
    seconds += 10;
  }

  if (event.target === $secondsUnits) {
    seconds += 1;
  }

  if (event.target === $btn) {
    if (isRunning) {
      console.log("Pausa la cuenta atrás");
      stopTimer();
      isRunning = false;
      $btn.textContent = "play_arrow";
    } else {
      console.log("Comienza la cuenta atrás");
      startTimer();
      isRunning = true;
      $btn.textContent = "pause";
    }
  }

  drawTimer();
});

if (minutes === 0 && seconds === 0 && isRunning) {
  console.log("Temporizador ha llegado a su fin");
  clearInterval(crono);
}
