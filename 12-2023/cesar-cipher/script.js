const cipherElement = document.getElementById("cipher");
const inputCipher = document.getElementById("cipher-input");
const resultCipher = document.getElementById("cipher-result");
const rangeCipher = document.getElementById("cipher-range");
const outputCipherRange = document.getElementById("cipher-output");

let value = 10;

const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");

const handleOutput = (event) => {
  value = rangeCipher.value;

  event.target.nextElementSibling.textContent = value;
};

const codeMessage = (currentLetterIndex, arrMessage) => {
  if (arrMessage.length === currentLetterIndex) return;

  inputCipher.value = inputCipher.value.substring(1);

  const spanCode = document.createElement("span");
  resultCipher.appendChild(spanCode);

  animateLetter(spanCode).then(() => {
    const originalLetter = arrMessage[currentLetterIndex];

    spanCode.innerHTML = alphabet.includes(originalLetter)
      ? alphabet[
          (alphabet.indexOf(originalLetter) + parseInt(value)) % alphabet.length
        ]
      : originalLetter;

    codeMessage(currentLetterIndex + 1, arrMessage);
  });
};

const animateLetter = (element) => {
  let changesOfLetter = 0;

  return new Promise((resolve) => {
    const roulette = setInterval(() => {
      element.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)];

      changesOfLetter++;

      if (changesOfLetter === 3) {
        clearInterval(roulette);
        resolve();
      }
    }, 50);
  });
};

const takeInputMessage = () => {
  const inputMessage = inputCipher.value.toLowerCase().split("");

  codeMessage(0, inputMessage);
};

const handleSubmit = (event) => {
  event.preventDefault();
  resultCipher.innerHTML = "";
  takeInputMessage();
};

inputCipher.focus();

// Event Listener

cipherElement.addEventListener("submit", handleSubmit);

rangeCipher.addEventListener("change", handleOutput);
