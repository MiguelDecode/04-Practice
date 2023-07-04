"use strict";

// Constantes y variables

const $imgList = document.querySelectorAll(".img");
const $ligthbox = document.querySelector(".lightbox");
const $bigImage = document.querySelector(".bigger");
const $btnClose = document.querySelector(".close");

const closeBtnHandler = () => $ligthbox.classList.remove("isActive");

document.addEventListener("click", (event) => {
  if (event.target.matches("img")) {
    $ligthbox.classList.add("isActive");
    $bigImage.src = event.target.src;
  }
});

/* $imgList.forEach((img) => {
  img.addEventListener("click", (event) => {
    $ligthbox.classList.add("isActive");
    $bigImage.src = img.src;
  });
}); */

$btnClose.addEventListener("pointerdown", closeBtnHandler);
