import ReactDOM from "react-dom/client";
import "./Modal.css";

export const ModalPortal = ({ children, isOpenModal, closeModal }) => {
  const preventPropagationContainer = (event) => event.stopPropagation();

  return ReactDOM.createRoot(document.getElementById("modal")).render(
    <article
      onClick={() => closeModal()}
      className={`modal ${isOpenModal && "is-open"}`}
    >
      <div className="modal-container" onClick={preventPropagationContainer}>
        <button onClick={() => closeModal()} className="modal-close">
          X
        </button>
        {children}
      </div>
    </article>
  );
};
