import { useState } from "react";
import Modal from "../../compoments/Modal"
import "./index.css"

const Board = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);


  return (
    <div className='wrapper'>
      <div className='navbar'> 
        <ul>
          <li>
            login
          </li>
          <li>
            signup
          </li>
        </ul>
      </div>
      <div className="App">
      <button onClick={handleOpenModal}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <h2>This is a Modal</h2>
          <p>Modal content goes here.</p>
        </Modal>
      </div>
    </div>
  )
}

export default Board