const $btn = document.getElementById("btnNotification");

const createNotification = () => {
  /* const notification = new Notification("Miguel Decode", {
    body: "Notificación Temporal",
    icon: "https://cdn-icons-png.flaticon.com/512/4470/4470631.png",
  }); */

  const notification2 = new Notification("Miguel Decode", {
    body: "Notificación Permanente",
    icon: "https://cdn-icons-png.flaticon.com/512/4470/4470631.png",
    requireInteraction: true,
  });

  notification2.addEventListener('click', event => {
    // Redireccionar a otra página, abrir un modal,...
  })
};

const obtainPermission = async () => {
  const response = await Notification.requestPermission();
  response == "granted" && createNotification();
};

document.addEventListener("click", (event) => {
  if (event.target === $btn) {
    if (!("Notification" in window)) {
      alert("This navigator no support notifications");
      return;
    }

    Notification.permission === "granted"
      ? createNotification()
      : obtainPermission();
  }
});
