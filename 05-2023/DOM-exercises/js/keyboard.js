export function shortcuts(event) {
  if (event.key === "a" && event.altKey)
    alert("Has lanzado una alerta con el Teclado");

  if (event.key === "c" && event.altKey)
    confirm("Has lanzado una confirmación con el Teclado");

  if (event.key === "p" && event.altKey)
    prompt("Has lanzado una entrada con el Teclado");
}

let x = 0;
let y = 0;

export function moveBall(event, ball, stage) {
  const $ball = document.querySelector(ball);
  const $stage = document.querySelector(stage);
  let limitsBall = $ball.getBoundingClientRect();
  let limitsStage = $stage.getBoundingClientRect();

  // console.log(event.keyCode);
  // console.log(event.key);

  // console.log(limitsBall);
  // console.log(limitsStage);

  switch (event.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) x -= 10;
      event.preventDefault();
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) y -= 10;
      event.preventDefault();
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) x += 10;
      event.preventDefault();
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) y += 10;
      event.preventDefault();
      break;
  }
  $ball.style.transform = `translate(${x}px, ${y}px)`;
}
