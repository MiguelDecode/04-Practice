(() => {
  "use strict";

  const btnNewGame = document.getElementById("new-game");
  const btnTake = document.getElementById("take-card");
  const btnStop = document.getElementById("stop-game");
  const playerDisplay = document.getElementById("player-score");
  const computerDisplay = document.getElementById("computer-score");
  const playerCards = document.getElementById("player-cards");
  const computerCards = document.getElementById("computer-cards");

  let deck = [];

  const suits = ["C", "D", "H", "S"];
  const specials = ["A", "J", "Q", "K"];

  let playersPoints = [];
  let playerPoints = 0;
  let computerPoints = 0;

  const initGame = (event, numPlayers = 2) => {
    deck = createDeck();
    for (let i = 0; i < numPlayers; i++) {
      playersPoints.push(0);
    }
  };

  const shuffleDeck = (arr) => arr.sort(() => Math.random() - 0.5);

  const createDeck = () => {
    deck = [];
    for (let i = 2; i < 11; i++) {
      for (const suit of suits) {
        deck.push(i + suit);
      }
    }

    for (const special of specials) {
      for (const suit of suits) {
        deck.push(special + suit);
      }
    }

    return shuffleDeck(deck);
  };

  const takeCard = () => {
    if (deck.length === 0) throw "No hay cartas en el deck";
    return deck.pop();
  };

  const valueCard = (card) => {
    let value = card.slice(0, card.length - 1);

    return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
  };

  const addPoints = (display, points, player) => {
    display.textContent = points;
    player += points;
  };

  const drawCard = (container, card) => {
    const imgCard = document.createElement("img");
    imgCard.classList.add("card-poker");
    imgCard.src = `/assets/cartas/${card}.png`;
    container.appendChild(imgCard);
  };

  const newgame = () => {
    createDeck();
    btnTake.disabled = false;
    btnStop.disabled = false;
    playerDisplay.textContent = 0;
    computerDisplay.textContent = 0;
    playerPoints = 0;
    computerPoints = 0;
    playerCards.innerHTML = "";
    computerCards.innerHTML = "";
  };

  const checkWinner = () => {
    if (computerPoints > playerPoints && computerPoints < 22) {
      showWinner("La computadora ha ganado");
    } else if (playerPoints > computerPoints && playerPoints < 22) {
      showWinner("El jugador ha ganado");
    } else if (computerPoints === playerPoints) {
      showWinner("Habeis quedado en empate");
    } else if (computerPoints > 21) {
      showWinner("La computadora ha perdido");
    }
  };

  const showWinner = (msg) => {
    setTimeout(() => {
      alert(msg);
    }, 100);
  };

  const computerTurn = () => {
    do {
      const card = takeCard();
      computerPoints += valueCard(card);
      addPoints(
        computerDisplay,
        computerPoints,
        playersPoints[playersPoints.length - 1]
      );
      drawCard(computerCards, card);
    } while (computerPoints < 21 && computerPoints < playerPoints);

    checkWinner();
  };

  const checkPlayer = () => {
    if (playerPoints > 21) {
      showWinner("El jugador ha perdido, la computadora gana");
      btnTake.disabled = true;
      btnStop.disabled = true;
    } else if (playerPoints === 21) {
      btnTake.disabled = true;
      btnStop.disabled = true;
      computerTurn();
    }
  };

  const stopPlayerTurn = () => {
    btnTake.disabled = true;
    computerTurn();
    btnStop.disabled = true;
  };

  const playerTurn = () => {
    const card = takeCard();
    playerPoints += valueCard(card);
    addPoints(playerDisplay, playerPoints, playersPoints[0]);
    drawCard(playerCards, card);
    checkPlayer();
  };

  // Eventos
  document.addEventListener("DOMContentLoaded", initGame);

  btnNewGame.addEventListener("click", newgame);

  btnTake.addEventListener("click", playerTurn);

  btnStop.addEventListener("click", stopPlayerTurn);
})();
