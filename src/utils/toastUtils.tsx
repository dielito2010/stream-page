import React, { useState } from "react";
import { Toast } from "react-bootstrap";

interface ToastUtilsProps {
  showToast: boolean;
  message: string;
  onClose?: () => void;
}

const ToastUtils: React.FC<ToastUtilsProps> = ({
  showToast,
  message,
  onClose,
}) => {
  const [show, setShow] = useState(showToast);

  const handleClose = () => {
    setShow(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Toast
      show={show}
      onClose={handleClose}
      delay={3000} // Tempo em milissegundos para o toast ficar visível
      autohide
      style={{
        position: "absolute",
        top: 20,
        right: 20,
      }}
    >
      <Toast.Header>
        <strong className="mr-auto">Notificação</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastUtils;
