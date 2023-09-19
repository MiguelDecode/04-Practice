import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import "./render-buttons.css";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next >";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "< Previous";

  const currentPageLabel = document.createElement("span");
  currentPageLabel.id = "current-page";
  currentPageLabel.textContent = usersStore.getCurrentPage();

  element.append(prevBtn, currentPageLabel, nextBtn);

  nextBtn.addEventListener("click", async () => {
    await usersStore.loadNextPage();
    currentPageLabel.textContent = usersStore.getCurrentPage();
    renderTable(element);
  });

  prevBtn.addEventListener("click", async () => {
    await usersStore.loadPreviousPage();
    currentPageLabel.textContent = usersStore.getCurrentPage();
    renderTable(element);
  });
};
