import React, { FC, ReactNode } from "react";
import "./modal.scss";
type ModalProps = {
  children: ReactNode;
  className?: string;
};

const Modal: FC<ModalProps> = ({ children, className }) => {
  return (
    <div className={`modal ${className}`}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
