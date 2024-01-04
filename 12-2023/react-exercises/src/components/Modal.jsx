import "./Modal.css";

export const Modal = ({ children, isOpenModal, closeModal }) => {
  const preventPropagationContainer = (event) => event.stopPropagation();

  return (
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
