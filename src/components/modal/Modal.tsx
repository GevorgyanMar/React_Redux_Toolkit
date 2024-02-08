import React, { FC, ReactNode } from "react";
import "./modal.scss";
type ModalProps = {
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* <span className="modal-close">&times;</span> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
