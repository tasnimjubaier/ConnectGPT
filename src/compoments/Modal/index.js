import React, { useRef, useEffect } from "react";

import './index.css'

function Modal(props) {
  const { isOpen, onClose, children } = props;
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
      else if (modalRef.current && modalRef.current.querySelector('.modal-content').contains(event.target)) {
        return;
      }
    }
    
    document.addEventListener("mouseup", handleClickOutside);
    
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [onClose]);

  console.log(isOpen)
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} >
      <div className="modal" ref={modalRef}>
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
