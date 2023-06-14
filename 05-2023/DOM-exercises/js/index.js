import draw from "./contest.js";
import countdown from "./countdown.js";
import darkTheme from "./dark-theme.js";
import userDeviceInfo from "./device_detection.js";
import formValidation from "./form_validation.js";
import getLocation from "./geolocation.js";
import { moveBall, shortcuts } from "./keyboard.js";
import hamburgerMenu from "./menu_hamburgesa.js";
import speechReader from "./narrador.js";
import networkStatus from "./network_detection.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, digitalAlarm } from "./reloj.js";
import responsiveMedia from "./responsive.js";
import { scrollTopBtn } from "./scroll_btn.js";
import scrollSpy from "./scroll_spy.js";
import searchFilter from "./searchFilter.js";
import slider from "./slider.js";
import smartVideo from "./smart_video.js";
import webCam from "./webcam.js";

document.addEventListener("DOMContentLoaded", (event) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  digitalAlarm("#alarm", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "May 22, 2023 19:08:19",
    "Feliz Cumpleaños amigo y docente digital, Jon Mircha"
  );
  scrollTopBtn(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px",
    "<a href='https://youtu.be/2SetvwBV-SU' target='_blank' rel='noopener'>Ver vídeo</a>",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px",
    "<a href='https://www.google.es/maps/place/Silicon+Valley,+California,+EE.+UU./@37.4023441,-122.3714147,10z/data=!3m1!4b1!4m6!3m5!1s0x808fb68ad0cfc739:0x7eb356b66bd4b50e!8m2!3d37.387474!4d-122.0575434!16zL20vMDZwdzY?hl=es&entry=ttu' target='_blank' rel='noopener'>Ver Mapa</a>",
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.8913472017!2d-122.04109805!3d37.40280355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1685119484859!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam();
  getLocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  formValidation();
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();

document.addEventListener("keydown", (event) => {
  shortcuts(event);
  moveBall(event, ".ball", ".stage");
});
