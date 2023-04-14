// SETTIMEOUT && SETINTERVAL

/* setTimeout(() => {
  console.log("Ejecutando un setTimeout a tres segundo");
}, 3000);


setInterval(() => {
  console.log("Ejecutando un setInterval a cada dos segundos");
}, 2000); */

/* let timer = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
  console.log("El reloj ha sido detenido");
}, 5000); */

// ASÍNCRONIA Y EL EVENT LOOP
// CÓDIGO SÍNCRONO BLOQUEANTE
/* (() => {
  console.log("Código Síncrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})(); */

// CÓDIGO ASÍNCRONO NO BLOQUEANTE
/* (() => {
  console.log("Código Asíncrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})(); */

// CALLBACKS

/* function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1900));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicio del Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(6, (value, result) => {
              console.log(`Callback: ${value}, ${result}`);
              cuadradoCallback(7, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(8, (value, result) => {
                  console.log(`Callback: ${value}, ${result}`);
                  cuadradoCallback(9, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    console.log("Final del Callback");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}); */

// PROMISES

/* function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`Error el valor ${value} ingresado no es un número`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log("Final Promise");
  })
  .catch((err) => console.error(err)); */

// ASYNC - AWAIT

function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`Error el valor ${value} ingresado no es un número`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio de función Asíncrona");

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Final de la función Asíncrona");
  } catch (error) {
    console.error(error);
  }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio de función Asíncrona Expresada");

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Final de la función Asíncrona Expresada");
  } catch (error) {
    console.error(error);
  }
};

funcionAsincronaExpresada();
