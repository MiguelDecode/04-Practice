import { showModal } from "../render-modal/render-modal";
import "./render-add-button.css";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderAddBtn = (element) => {
  const fabButton = document.createElement("button");
  fabButton.textContent = "+";
  fabButton.classList.add("fab-button");

  element.append(fabButton);

  fabButton.addEventListener("click", () => {
    showModal();
  });
};
