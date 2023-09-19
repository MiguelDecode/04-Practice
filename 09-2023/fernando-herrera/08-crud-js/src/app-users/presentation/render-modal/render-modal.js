import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";
import { getUserbyId } from "../../usecases/get-user-by-id";
let modal, form;
let loadedUser = {};

/**
 *
 * @param {String | Number} id
 */
export const showModal = async (id) => {
  modal?.classList.remove("hide-modal");
  loadedUser = {};

  if (!id) return;

  const user = await getUserbyId(id);

  setFormValues(user);
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");
  form?.reset();
};

/**
 *
 * @param {User} user
 */
const setFormValues = (user) => {
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="balance"]').value = user.balance;
  form.querySelector('[name="isActive"]').checked = user.isActive;

  loadedUser = user;
};

/**
 *
 * @param {HTMLDivElement} element
 * @param {user => Promise<void>}
 */
export const renderModal = (element, callback) => {
  if (modal) return;

  modal = document.createElement("div");
  modal.innerHTML = modalHtml;
  modal.classList.add("modal-container");
  modal.classList.add("hide-modal");

  form = modal.querySelector("form");

  modal.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal-container")) hideModal();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const isActive = document.querySelector("#is-active").checked;
    const userLike = { ...loadedUser };

    for (const [key, value] of formData) {
      if (key === "balance") {
        userLike[key] = Number(value);
        continue;
      }

      if (key === "isActive") {
        userLike[key] = value === "on" ? true : false;
        continue;
      }

      if (!isActive) {
        userLike["isActive"] = false;
        continue;
      }
    }

    await callback(userLike);

    hideModal();
  });

  element.append(modal);
};
