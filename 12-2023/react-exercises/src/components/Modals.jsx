import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import { Modal } from "./Modal";
import { ModalPortal } from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(true);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);

  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    useModal(false);

  return (
    <>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <button onClick={openModal2}>Modal 2</button>
      <button onClick={openModal3}>Modal 3</button>
      <button onClick={openModalPortal}>Modal en Portal</button>

      <Modal isOpenModal={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este el contenido de mi modal 1</p>
        <img
          src="https://images.unsplash.com/photo-1683009427470-a36fee396389?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sea"
        />
      </Modal>

      <Modal isOpenModal={isOpenModal2} closeModal={closeModal2}>
        <h3>Bienvenido a mi página, espero que sea de tu agrado.</h3>
      </Modal>

      <Modal isOpenModal={isOpenModal3} closeModal={closeModal3}>
        <ContactForm />
      </Modal>

      <ModalPortal
        isOpenModal={isOpenModalPortal}
        closeModal={closeModalPortal}
      >
        <h3>Modal en Portal</h3>
        <p>
          Este es el contenido de un modal que carga el otro nodo del DOM
          diferente a donde carga nuestra app de React, gracias a un React
          Portal.
        </p>
        <img
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Festival musical, efectos visuales."
        />
      </ModalPortal>
    </>
  );
};

export default Modals;
