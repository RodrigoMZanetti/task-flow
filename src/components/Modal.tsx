import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  function handleCloseModal(e: React.MouseEvent): void {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  }

  function handleOpenAndCloseModal(display: boolean) {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  }

  function handleEditTask(): void {
    handleOpenAndCloseModal(true);
  }

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={handleCloseModal}></div>
      <div className={styles.modal}>
        <h2>Modal Text</h2>
        {children}
      </div>
    </div>
  );
}
export default Modal;
