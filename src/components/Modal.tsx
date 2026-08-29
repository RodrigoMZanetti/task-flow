import styles from "./Modal.module.css";
import type React from "react";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  function handleCloseModal(): void {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
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
