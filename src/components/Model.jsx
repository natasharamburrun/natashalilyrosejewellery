import React from "react";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header"></div>
        <div className="modal-body">
          <h1>This is the modal body</h1>
        </div>
        <button onClick={props.onClose} className="button primary-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
